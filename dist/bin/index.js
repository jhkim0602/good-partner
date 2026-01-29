#!/usr/bin/env node
import { Command } from 'commander';
import { createRequire } from 'module';
import { startWizard } from '../lib/wizard.js';
import * as commands from '../lib/commands.js';
import * as logic from '../lib/logic.js';
const require = createRequire(import.meta.url);
const pkg = require('../../package.json'); // Adjusted for src/bin/ -> root
const program = new Command();
program
    .name('good-partner')
    .description('The ultimate collaboration skill for AI and Humans.')
    .version(pkg.version);
// Init (Wizard)
program
    .command('init')
    .description('Initialize a new Good Partner project')
    .action(async () => {
    await startWizard();
});
// Register
program
    .command('register <name>')
    .description('Register a new person or AI (e.g., "good-partner register GPT-4 --role ai")')
    .option('-r, --role <role>', 'Role: human, ai, bot', 'human')
    .action(async (name, options) => {
    await commands.register(name, options.role);
});
// Prompt
program
    .command('prompt')
    .description('Generate System Instruction for AI Agent')
    .action(async () => {
    await commands.prompt();
});
// Skill / Install
program
    .command('skill <tool>')
    .alias('install')
    .description('Install a specific AI adapter/skill (codex, claude, gemini)')
    .action(async (tool) => {
    // Reuse logic.installAdapters but expect array
    // Map tool name to Capitalized format expected by logic if needed,
    // but logic checks includes('Codex') etc. so let's normalize.
    const ToolMap = {
        'codex': 'Codex',
        'claude': 'Claude',
        'gemini': 'Gemini'
    };
    const normalized = ToolMap[tool.toLowerCase()];
    if (normalized) {
        await logic.installAdapters([normalized]);
    }
    else {
        console.error(`Unknown skill: ${tool}. Supported: codex, claude, gemini`);
    }
});
// Doctor
program
    .command('doctor')
    .description('Check project health and protocol compliance')
    .action(async () => {
    await commands.doctor();
});
program.parse(process.argv);
// Default to wizard if no args
if (process.argv.length === 2) {
    startWizard();
}
