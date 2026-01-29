import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = path.resolve(__dirname, '../../');
/**
 * Register a person in .good-partner/team.yaml
 */
export async function register(name, role = 'human') {
    const root = process.cwd();
    // We check for .good-partner directory
    const gpRoot = path.join(root, '.good-partner');
    const teamPath = path.join(gpRoot, 'team.yaml');
    if (!fs.existsSync(teamPath)) {
        console.error(chalk.red('Error: .good-partner/team.yaml not found. Run "good-partner init" first.'));
        return;
    }
    const content = fs.readFileSync(teamPath, 'utf8');
    if (content.includes(`name: ${name}`)) {
        console.log(chalk.yellow(`User ${name} is already registered.`));
        return;
    }
    // Generate ID: u-name
    const slug = name.toLowerCase().replace(/[^a-z0-9]/g, '-');
    const id = `u-${slug}`;
    // Simple YAML append
    const newEntry = `  - id: ${id}\n    name: ${name}\n    role: ${role}\n`;
    await fs.appendFile(teamPath, newEntry);
    console.log(chalk.green(`✓ Registered ${name} (${id}) in .good-partner/team.yaml`));
}
/**
 * Generate System Prompt
 */
export async function prompt() {
    const root = process.cwd();
    const agentsPath = path.join(root, '.good-partner', 'AGENTS.md');
    const fallbackPath = path.join(PKG_ROOT, 'AGENTS.md');
    let content = '';
    if (fs.existsSync(agentsPath)) {
        content = fs.readFileSync(agentsPath, 'utf8');
    }
    else if (fs.existsSync(fallbackPath)) {
        content = fs.readFileSync(fallbackPath, 'utf8');
    }
    else {
        // Ultimate fallback
        content = '# Good Partner System Instruction\n\nNo AGENTS.md found. Please run "good-partner init".';
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
    const root = process.cwd();
    const gpRoot = path.join(root, '.good-partner');
    if (!fs.existsSync(gpRoot)) {
        console.error(chalk.red('[FAIL] .good-partner/ directory not found.'));
        console.log(chalk.yellow('Please run "good-partner init" to set up your project.'));
        return;
    }
    else {
        console.log(chalk.green('[OK] Found .good-partner/'));
    }
    // Check subdirectories
    const requiredDirs = ['specs', 'work', 'logs'];
    let ok = true;
    for (const dir of requiredDirs) {
        if (!fs.existsSync(path.join(gpRoot, dir))) {
            console.error(chalk.red(`[FAIL] Missing directory: .good-partner/${dir}`));
            ok = false;
        }
        else {
            console.log(chalk.green(`[OK] Found .good-partner/${dir}`));
        }
    }
    // Check Critical Files
    const requiredFiles = ['kanban.md', 'team.yaml', 'AGENTS.md'];
    for (const file of requiredFiles) {
        if (!fs.existsSync(path.join(gpRoot, file))) {
            console.error(chalk.red(`[FAIL] Missing file: .good-partner/${file}`));
            ok = false;
        }
        else {
            console.log(chalk.green(`[OK] Found .good-partner/${file}`));
        }
    }
    if (ok) {
        console.log(chalk.bold.green('\nProject looks healthy! Structure is valid (v1.1.1).'));
    }
    else {
        console.log(chalk.bold.red('\nIssues found. Please run "good-partner init" again or fix manually.'));
    }
}
