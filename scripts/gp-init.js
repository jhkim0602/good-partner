#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const opts = {};
for (let i = 0; i < args.length; i += 1) {
  const key = args[i];
  const val = args[i + 1];
  if (key === '--project') opts.project = val;
  if (key === '--template') opts.template = val;
}

if (!opts.project) {
  console.error('Usage: node good-partner/scripts/gp-init.js --project P-0001__slug');
  process.exit(1);
}

const root = path.resolve(process.cwd(), 'good-partner');
const projectRoot = path.join(root, 'projects', opts.project);
const templateRoot = path.join(root, 'templates', 'default');

const required = ['overview.md', 'scope.md', 'roadmap.md', 'requirements.md'];
const registryPath = path.join(root, 'registry', 'projects.yaml');

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function copyTemplate(name, dest) {
  const src = path.join(templateRoot, name);
  if (!fs.existsSync(src)) return;
  fs.copyFileSync(src, dest);
}

function registerProject(projectId) {
  if (!fs.existsSync(registryPath)) return;
  const content = fs.readFileSync(registryPath, 'utf8');
  const exists = content.split('\n').some((line) => line.trim() === `- id: ${projectId}`);
  if (exists) return;
  const lines = content.trim().length ? content.split('\n') : ['projects:'];
  lines.push(`  - id: ${projectId}`);
  fs.writeFileSync(registryPath, lines.join('\n') + '\n');
}

if (!fs.existsSync(templateRoot)) {
  console.error('Template not found: default');
  process.exit(1);
}

ensureDir(projectRoot);

// top-level docs
for (const doc of required) {
  const dest = path.join(projectRoot, doc);
  if (!fs.existsSync(dest)) copyTemplate(doc, dest);
}

const indexPath = path.join(projectRoot, 'INDEX.md');
if (!fs.existsSync(indexPath)) {
  fs.writeFileSync(indexPath, `# ${opts.project}\n\nProject index.\n`);
}

// standard structure
const dirs = [
  'decisions',
  'research',
  'ownership',
  'phases',
  'features',
  'work',
  'sessions',
  'handoffs',
  'uploads',
  path.join('qa', 'results'),
];

for (const dir of dirs) ensureDir(path.join(projectRoot, dir));

// QA checklist
const checklist = path.join(projectRoot, 'qa', 'checklist.md');
if (!fs.existsSync(checklist)) {
  copyTemplate('checklist.md', checklist);
}

const phaseIndex = path.join(projectRoot, 'phases', 'INDEX.md');
if (!fs.existsSync(phaseIndex)) {
  copyTemplate('phase-index.md', phaseIndex);
}

const featureIndex = path.join(projectRoot, 'features', 'INDEX.md');
if (!fs.existsSync(featureIndex)) {
  copyTemplate('feature-index.md', featureIndex);
}

registerProject(opts.project);

if (opts.template && opts.template !== 'default') {
  console.warn('Template selection is disabled. Using default template.');
}
console.log(`Initialized project: ${opts.project} (template: default)`);
