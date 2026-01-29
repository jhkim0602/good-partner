import inquirer from 'inquirer';
import chalk from 'chalk';
import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';
import * as logic from './logic.js';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
export async function startWizard() {
    console.log(chalk.bold.blue('\n🚀 Welcome to Good Partner\n'));
    // Define supported languages
    const LANGUAGES = {
        'Korean (한국어)': 'ko',
        'English': 'en',
        'Chinese (中文)': 'zh'
    };
    const root = process.cwd();
    let defaultName = path.basename(root);
    // Try to read package.json for a better name
    if (fs.existsSync(path.join(root, 'package.json'))) {
        try {
            const pkg = fs.readJsonSync(path.join(root, 'package.json'));
            if (pkg.name)
                defaultName = pkg.name.replace(/^@/, '').replace(/\//, '-');
        }
        catch (e) { /* ignore */ }
    }
    const answers = await inquirer.prompt([
        {
            type: 'list',
            name: 'structureType',
            message: 'What kind of repository is this?',
            choices: [
                { name: 'Single Project (Apply to current folder)', value: 'single' },
                { name: 'Monorepo / Workspace (Create sub-projects)', value: 'monorepo' }
            ]
        },
        // For Monorepo: Ask for Slug
        {
            type: 'input',
            name: 'projectSlug',
            message: 'Enter Project Name/ID:',
            default: `P-001__${defaultName}`,
            when: (ans) => ans.structureType === 'monorepo'
        },
        // For Single: Confirm
        {
            type: 'confirm',
            name: 'confirmRoot',
            message: `Initialize Good Partner in current directory (${defaultName})?`,
            default: true,
            when: (ans) => ans.structureType === 'single'
        },
        {
            type: 'list',
            name: 'language',
            message: 'Primary Documentation Language:',
            choices: Object.keys(LANGUAGES)
        },
        {
            type: 'checkbox',
            name: 'adapters',
            message: 'Install AI Adapters (Skills):',
            choices: ['Codex', 'Claude', 'Gemini']
        }
    ]);
    if (answers.structureType === 'single' && !answers.confirmRoot) {
        console.log(chalk.yellow('Cancelled.'));
        return;
    }
    const selectedLangCode = LANGUAGES[answers.language] || 'en';
    // Determine Project Slug & Root for Logic
    let targetSlug = defaultName;
    let isMonorepo = false;
    if (answers.structureType === 'monorepo') {
        targetSlug = answers.projectSlug || defaultName;
        isMonorepo = true;
    }
    console.log(chalk.green(`\nInitializing...`));
    await logic.initProject(targetSlug, selectedLangCode, isMonorepo);
    if (answers.adapters && answers.adapters.length > 0) {
        console.log(chalk.cyan(`Installing Adapters: ${answers.adapters.join(', ')}`));
        await logic.installAdapters(answers.adapters);
    }
    console.log(chalk.bold.green('\n✨ Ready! Run "good-partner register <YourName>" to join.'));
}
