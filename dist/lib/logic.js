import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = path.resolve(__dirname, '../../');
export async function initProject(projectSlug, langCode, isMonorepo = false) {
    const root = process.cwd();
    // Determine where the "Project Root" is
    let projectRoot = root;
    if (isMonorepo) {
        projectRoot = path.join(root, 'projects', projectSlug);
    }
    const templateRoot = path.join(PKG_ROOT, 'templates', 'default');
    if (!fs.existsSync(templateRoot)) {
        console.error(chalk.red(`Template not found at: ${templateRoot}`));
        return;
    }
    console.log(chalk.blue(`Setting up structure in: ${projectRoot}`));
    fs.ensureDirSync(projectRoot);
    // 1. Copy Templates
    const requiredDocs = ['overview.md', 'scope.md', 'roadmap.md', 'requirements.md'];
    for (const doc of requiredDocs) {
        const src = path.join(templateRoot, doc);
        const dest = path.join(projectRoot, doc);
        if (!fs.existsSync(dest) && fs.existsSync(src)) {
            fs.copySync(src, dest);
        }
    }
    // 2. Create INDEX.md
    const indexPath = path.join(projectRoot, 'INDEX.md');
    if (!fs.existsSync(indexPath)) {
        const title = langCode === 'ko' ? '프로젝트 인덱스' : 'Project Index';
        const content = `# ${projectSlug}\n\n${title}\n`;
        fs.writeFileSync(indexPath, content);
    }
    // 3. Create Standard Directories
    const dirs = [
        'decisions', 'research', 'ownership', 'phases', 'features',
        'work', 'sessions', 'handoffs', 'uploads', 'qa/results'
    ];
    for (const dir of dirs) {
        fs.ensureDirSync(path.join(projectRoot, dir));
    }
    // 4. Copy QA Checklist & Indexes
    const checklist = path.join(projectRoot, 'qa', 'checklist.md');
    if (!fs.existsSync(checklist))
        fs.copySync(path.join(templateRoot, 'checklist.md'), checklist);
    const phaseIndex = path.join(projectRoot, 'phases', 'INDEX.md');
    if (!fs.existsSync(phaseIndex))
        fs.copySync(path.join(templateRoot, 'phase-index.md'), phaseIndex);
    const featureIndex = path.join(projectRoot, 'features', 'INDEX.md');
    if (!fs.existsSync(featureIndex))
        fs.copySync(path.join(templateRoot, 'feature-index.md'), featureIndex);
    // 5. Register Project
    // If Monorepo, register in root/registry/projects.yaml
    // If Single, maybe we don't need a registry or just put it in root/registry/projects.yaml
    await registerProject(root, projectSlug);
    // 6. Language Enforcement Config (Always at actual root)
    const configPath = path.join(root, '.good-partner-rc.json');
    const config = { language: langCode, type: isMonorepo ? 'monorepo' : 'single' };
    fs.writeJsonSync(configPath, config, { spaces: 2 });
    console.log(chalk.green(`✓ Project initialized.`));
}
/**
 * Register project in registry/projects.yaml
 */
async function registerProject(root, projectSlug) {
    const registryPath = path.join(root, 'registry', 'projects.yaml');
    fs.ensureDirSync(path.dirname(registryPath));
    let content = '';
    if (fs.existsSync(registryPath)) {
        content = fs.readFileSync(registryPath, 'utf8');
    }
    else {
        content = 'projects:\n';
    }
    if (!content.includes(projectSlug)) {
        content += `  - id: ${projectSlug}\n`;
        fs.writeFileSync(registryPath, content);
    }
}
/**
 * Install AI Adapters
 */
export async function installAdapters(adapters) {
    const userRoot = process.cwd();
    if (adapters.includes('Codex')) {
        const src = path.join(PKG_ROOT, 'adapters', 'codex', 'skills');
        const dest = path.join(userRoot, '.codex', 'skills');
        if (fs.existsSync(src)) {
            fs.copySync(src, dest);
            console.log(chalk.green('✓ Installed Codex Adapter'));
        }
    }
    if (adapters.includes('Claude')) {
        const srcBase = path.join(PKG_ROOT, 'adapters', 'claude-code');
        const destBase = path.join(userRoot, '.claude');
        // Copy Files
        if (fs.existsSync(path.join(srcBase, 'settings.json'))) {
            fs.copySync(path.join(srcBase, 'settings.json'), path.join(destBase, 'settings.json'));
        }
        // Copy CLAUDE.md to Root
        if (fs.existsSync(path.join(srcBase, 'CLAUDE.md'))) {
            fs.copySync(path.join(srcBase, 'CLAUDE.md'), path.join(userRoot, 'CLAUDE.md'));
        }
        // Copy commands
        if (fs.existsSync(path.join(srcBase, 'commands'))) {
            fs.copySync(path.join(srcBase, 'commands'), path.join(destBase, 'commands'));
        }
        console.log(chalk.green('✓ Installed Claude Adapter'));
    }
    if (adapters.includes('Gemini')) {
        const srcBase = path.join(PKG_ROOT, 'adapters', 'gemini');
        const destBase = path.join(userRoot, '.gemini');
        if (fs.existsSync(path.join(srcBase, 'settings.json'))) {
            fs.copySync(path.join(srcBase, 'settings.json'), path.join(destBase, 'settings.json'));
        }
        if (fs.existsSync(path.join(srcBase, 'GOODPARTNER.md'))) {
            fs.copySync(path.join(srcBase, 'GOODPARTNER.md'), path.join(userRoot, 'GOODPARTNER.md'));
        }
        console.log(chalk.green('✓ Installed Gemini Adapter'));
    }
}
