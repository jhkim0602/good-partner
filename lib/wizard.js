import inquirer from 'inquirer';
import chalk from 'chalk';
import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import * as logic from './logic.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

export async function startWizard() {
  console.log(chalk.bold.blue('\n🚀 Welcome to Good Partner - The Ultimate AI Collaboration Protocol\n'));

  // Define supported languages
  const LANGUAGES = {
    'Korean (한국어)': 'ko',
    'English': 'en',
    'Chinese (中文)': 'zh'
  };

  const answers = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'initProject',
      message: 'Do you want to initialize a new Good Partner project here?',
      default: true
    },
    {
      type: 'input',
      name: 'projectSlug',
      message: 'Enter Project Slug (e.g., P-0001__my-app):',
      default: 'P-0001__new-project',
      when: (answers) => answers.initProject,
      validate: (input) => {
        if (/^P-\d{4}__[a-z0-9]+(?:-[a-z0-9]+)*$/.test(input)) return true;
        return 'Format must be P-xxxx__slug (lowercase, numbers, hyphens)';
      }
    },
    {
      type: 'list',
      name: 'language',
      message: 'Select Primary Language for Documentation:',
      choices: Object.keys(LANGUAGES),
      when: (answers) => answers.initProject
    },
    {
      type: 'checkbox',
      name: 'adapters',
      message: 'Select AI Adapters to install:',
      choices: ['Codex', 'Claude', 'Gemini'],
      when: (answers) => answers.initProject
    }
  ]);

  if (!answers.initProject) {
    console.log(chalk.yellow('Initialization cancelled.'));
    return;
  }

  const selectedLangCode = LANGUAGES[answers.language];
  console.log(chalk.green(`\nInitializing project: ${answers.projectSlug}`));
  console.log(chalk.cyan(`Language set to: ${answers.language} (${selectedLangCode})`));

  await logic.initProject(answers.projectSlug, selectedLangCode);

  if (answers.adapters && answers.adapters.length > 0) {
    console.log(chalk.cyan(`Installing Adapters: ${answers.adapters.join(', ')}`));
    await logic.installAdapters(answers.adapters);
  }

  console.log(chalk.bold.green('\n✨ Good Partner Environment is Ready! ✨'));
  console.log(chalk.white('Run usage command: '), chalk.yellow('npx good-partner help'));
}
