#!/usr/bin/env node

import { Command } from 'commander';
import { createRequire } from 'module';
import { startWizard } from '../lib/wizard.js';

const require = createRequire(import.meta.url);
const pkg = require('../package.json');

const program = new Command();

program
  .name('good-partner')
  .description('The ultimate collaboration skill for AI and Humans.')
  .version(pkg.version);

program
  .command('init')
  .description('Initialize a new Good Partner project')
  .action(() => {
    startWizard();
  });

program.parse(process.argv);

// If no args, run wizard (defensive check)
if (process.argv.length === 2) {
  startWizard();
}
