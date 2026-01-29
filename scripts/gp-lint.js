#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const root = path.resolve(process.cwd(), 'good-partner');

const slug = '[a-z0-9]+(?:-[a-z0-9]+)*';
const person = '(?:u|ai|bot)-' + slug;
const projectDir = new RegExp(`^P-\\d{4}__${slug}$`);

const rules = [
  { dir: 'work', re: new RegExp(`^T-\\d{4}__${slug}\\.md$`) },
  { dir: 'handoffs', re: new RegExp(`^H-\\d{4}__T-\\d{4}__from-${person}__to-${person}\\.md$`) },
  { dir: 'decisions', re: new RegExp(`^ADR-\\d{4}__${slug}\\.md$`) },
  { dir: 'research', re: new RegExp(`^R-\\d{4}__${slug}\\.md$`) },
  { dir: 'phases', re: new RegExp(`^PH-\\d{4}__${slug}\\.md$`) },
  { dir: 'features', re: new RegExp(`^F-\\d{4}__${slug}\\.md$`) },
  { dir: path.join('qa', 'results'), re: new RegExp(`^Q-\\d{4}__${slug}\\.md$`) },
];

const dateDir = /^\d{4}-\d{2}-\d{2}$/;
const sessionFile = new RegExp(`^\\d{4}__${person}\\.md$`);
const evidenceFile = new RegExp(`^E-\\d{4}__${slug}\\.[a-z0-9]+$`);

const errors = [];

function exists(p) {
  return fs.existsSync(p);
}

function scan(dir) {
  if (!exists(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scan(full);
    } else {
      checkFile(full);
    }
  }
}

function findProjectRoot(filePath) {
  const parts = filePath.split(path.sep);
  const idx = parts.indexOf('projects');
  if (idx === -1 || idx + 1 >= parts.length) return null;
  const candidate = parts[idx + 1];
  if (!projectDir.test(candidate)) return null;
  return parts.slice(0, idx + 2).join(path.sep);
}

function checkFile(filePath) {
  const rel = path.relative(root, filePath);
  if (rel === 'PROTOCOL.md' || rel === 'INDEX.md') return;
  if (rel.startsWith(path.join('templates', path.sep))) return;
  if (rel.startsWith(path.join('registry', path.sep))) return;
  if (rel.startsWith(path.join('scripts', path.sep))) return;

  const projectRoot = findProjectRoot(filePath);
  if (!projectRoot) return;

  const relToProject = path.relative(projectRoot, filePath);
  const parts = relToProject.split(path.sep);

  if (parts.length === 1) {
    const allowed = ['INDEX.md', 'overview.md', 'scope.md', 'roadmap.md', 'requirements.md'];
    if (!allowed.includes(parts[0])) {
      errors.push(`${rel}: unexpected file at project root`);
    }
    return;
  }

  const dir = parts[0];
  const file = parts[parts.length - 1];

  if ((dir === 'phases' || dir === 'features') && file === 'INDEX.md') {
    if (parts.length !== 2) errors.push(`${rel}: invalid index location in ${dir}`);
    return;
  }

  if (dir === 'sessions') {
    if (parts.length !== 3 || !dateDir.test(parts[1]) || !sessionFile.test(file)) {
      errors.push(`${rel}: invalid session path/name`);
    }
    return;
  }

  if (dir === 'uploads') {
    if (parts.length !== 3 || !dateDir.test(parts[1]) || !evidenceFile.test(file)) {
      errors.push(`${rel}: invalid upload path/name`);
    }
    return;
  }

  const rule = rules.find(r => r.dir === dir || r.dir === path.join(dir, parts[1] || ''));
  if (!rule) return;
  if (rule.dir === dir && parts.length !== 2) {
    errors.push(`${rel}: unexpected nested path in ${dir}`);
    return;
  }
  if (rule.dir === path.join(dir, parts[1] || '') && parts.length !== 3) {
    errors.push(`${rel}: unexpected nested path in ${rule.dir}`);
    return;
  }
  if (!rule.re.test(file)) {
    errors.push(`${rel}: invalid file name in ${dir}`);
  }
}

function main() {
  if (!exists(root)) {
    console.error('good-partner directory not found.');
    process.exit(2);
  }

  scan(root);

  if (errors.length) {
    console.error('Naming rule violations:');
    for (const err of errors) console.error('- ' + err);
    process.exit(1);
  }

  console.log('gp-lint: OK');
}

main();
