import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = path.resolve(__dirname, '../../');
/**
 * Register a person in registry/people.yaml
 */
export async function register(name, role = 'human') {
    const root = process.cwd();
    const registryPath = path.join(root, 'registry', 'people.yaml');
    if (!fs.existsSync(registryPath)) {
        console.error(chalk.red('Error: registry/people.yaml not found. Run "good-partner init" first.'));
        return;
    }
    const content = fs.readFileSync(registryPath, 'utf8');
    if (content.includes(`name: ${name}`)) {
        console.log(chalk.yellow(`User ${name} is already registered.`));
        return;
    }
    // Generate ID: u-name
    const slug = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const id = `u-${slug}`;
    const newEntry = `  - id: ${id}\n    name: ${name}\n    role: ${role}\n`;
    await fs.appendFile(registryPath, newEntry);
    console.log(chalk.green(`✓ Registered ${name} (${id})`));
}
/**
 * Generate System Prompt
 */
export async function prompt() {
    const agentsPath = path.join(PKG_ROOT, 'AGENTS.md'); // We will create this
    let content = '';
    if (fs.existsSync(agentsPath)) {
        content = fs.readFileSync(agentsPath, 'utf8');
    }
    else {
        // Fallback if not built yet
        content = '# Good Partner System Instruction\n\nYou are an AI agent operating under the Good Partner Protocol.\nReview PROTOCOL.md for rules.';
    }
    console.log(chalk.bold.blue('\n--- CUT HERE ---\n'));
    console.log(content);
    console.log(chalk.bold.blue('\n--- CUT HERE ---\n'));
    console.log(chalk.gray('Copy the above content and paste it into your AI session (ChatGPT, Claude, etc.)'));
}
/**
 * Doctor / Lint
 */
export async function doctor() {
    console.log(chalk.blue('Running Good Partner Doctor...'));
    // Basic layout check
    const requiredDirs = ['projects', 'registry', 'templates'];
    const root = process.cwd();
    let ok = true;
    for (const dir of requiredDirs) {
        if (!fs.existsSync(path.join(root, dir))) {
            console.error(chalk.red(`[FAIL] Missing directory: ${dir}`));
            ok = false;
        }
        else {
            console.log(chalk.green(`[OK] Found ${dir}`));
        }
    }
    // Check language config
    if (fs.existsSync(path.join(root, '.good-partner-rc.json'))) {
        console.log(chalk.green('[OK] Found configuration file'));
    }
    else {
        console.log(chalk.yellow('[WARN] No .good-partner-rc.json found'));
    }
    if (ok) {
        console.log(chalk.bold.green('\nProject looks healthy!'));
    }
    else {
        console.log(chalk.bold.red('\nIssues found. Please run "good-partner init" to fix missing structures.'));
    }
}
