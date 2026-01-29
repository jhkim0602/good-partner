#!/usr/bin/env node
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);
const opts = { tools: [] };
for (let i = 0; i < args.length; i += 1) {
  const key = args[i];
  const val = args[i + 1];
  if (key === '--tool') {
    opts.tools.push(val);
    i -= 0;
  }
}

if (opts.tools.length === 0) {
  opts.tools = ['claude-code', 'gemini', 'codex'];
}

const root = process.cwd();
const gpRoot = path.join(root, 'good-partner');

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyDir(srcDir, destDir) {
  if (!fs.existsSync(srcDir)) return;
  fs.mkdirSync(destDir, { recursive: true });
  for (const entry of fs.readdirSync(srcDir, { withFileTypes: true })) {
    const src = path.join(srcDir, entry.name);
    const dest = path.join(destDir, entry.name);
    if (entry.isDirectory()) copyDir(src, dest);
    else copyFile(src, dest);
  }
}

function installClaude() {
  const base = path.join(gpRoot, 'adapters', 'claude-code');
  const dest = path.join(root, '.claude');
  copyFile(path.join(base, 'settings.json'), path.join(dest, 'settings.json'));
  copyFile(path.join(base, 'CLAUDE.md'), path.join(root, 'CLAUDE.md'));
  copyDir(path.join(base, 'commands'), path.join(dest, 'commands'));
  console.log('Installed Claude Code adapter to .claude/ and CLAUDE.md');
}

function installGemini() {
  const base = path.join(gpRoot, 'adapters', 'gemini');
  const dest = path.join(root, '.gemini');
  copyFile(path.join(base, 'settings.json'), path.join(dest, 'settings.json'));
  copyFile(path.join(base, 'GOODPARTNER.md'), path.join(root, 'GOODPARTNER.md'));
  console.log('Installed Gemini adapter to .gemini/ and GOODPARTNER.md');
}

function installCodex() {
  const base = path.join(gpRoot, 'adapters', 'codex');
  const dest = path.join(root, '.codex', 'skills');
  copyDir(path.join(base, 'skills'), dest);
  console.log('Installed Codex skill to .codex/skills/');
}

function installAntigravity() {
  console.log('Antigravity adapter is manual. See good-partner/adapters/antigravity/README.md');
}

for (const tool of opts.tools) {
  if (tool === 'claude-code') installClaude();
  else if (tool === 'gemini') installGemini();
  else if (tool === 'codex') installCodex();
  else if (tool === 'antigravity') installAntigravity();
  else console.warn(`Unknown tool: ${tool}`);
}
