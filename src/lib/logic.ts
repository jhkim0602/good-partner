import fs from 'fs-extra';
import path from 'path';
import chalk from 'chalk';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PKG_ROOT = path.resolve(__dirname, '../../');

export async function initProject(projectSlug: string, langCode: string, isMonorepo: boolean = false): Promise<void> {
  const root = process.cwd();

  // Determine where the "Project Root" is
  let projectRoot = root;
  if (isMonorepo) {
      projectRoot = path.join(root, 'projects', projectSlug);
  }

  // Define the Good Partner Core Directory
  const gpRoot = path.join(projectRoot, 'good-partner');

  const templateRoot = path.join(PKG_ROOT, 'templates', 'default');

  if (!fs.existsSync(templateRoot)) {
    console.error(chalk.red(`Template not found at: ${templateRoot}`));
    return;
  }

  console.log(chalk.blue(`Initializing Good Partner structure in: ${gpRoot}`));
  fs.ensureDirSync(gpRoot);

  // Define Sub-directories (Legacy flat -> Nested "Spec Kit" structure)
  const dirs = [
    'specs',        // Replaces decisions, requirements, scope, roadmap
    'work',         // Active tasks
    'logs',         // Sessions, Handoffs
    'media',        // Uploads, Assets
    'tests'         // QA results
  ];

  for (const dir of dirs) {
    fs.ensureDirSync(path.join(gpRoot, dir));
  }

  // 1. Copy Templates to 'specs' (Converting old flat docs to specs)
  const specDocs = ['overview.md', 'scope.md', 'roadmap.md', 'requirements.md'];
  for (const doc of specDocs) {
    const src = path.join(templateRoot, doc);
    const dest = path.join(gpRoot, 'specs', doc);
    if (!fs.existsSync(dest) && fs.existsSync(src)) {
      fs.copySync(src, dest);
    }
  }

  // 2. Create KANBAN.md (Single Source of Truth)
  const kanbanPath = path.join(gpRoot, 'kanban.md');
  if (!fs.existsSync(kanbanPath)) {
    const title = langCode === 'ko' ? '칸반 보드 (Kanban Board)' : 'Kanban Board';
    const content = `# ${title}

## 📋 TODO (Backlog)
- [ ] Initial System Setup
- [ ] define specs/requirements.md

## 🏃 IN PROGRESS
- [ ] Project Initialization (You are here)

## ✅ DONE
- [x] good-partner init
`;
    fs.writeFileSync(kanbanPath, content);
  }

  // 3. Create CONFIG (Metadata)
  const configPath = path.join(gpRoot, 'config.json');
  const config = {
      version: "1.1.0",
      projectSlug,
      language: langCode,
      type: isMonorepo ? 'monorepo' : 'single',
      structure: 'good-partner-v1'
  };
  fs.writeJsonSync(configPath, config, { spaces: 2 });

  // 4. Create Team Registry (team.yaml)
  await registerProject(gpRoot, projectSlug); // Actually creating team.yaml here essentially

  // 5. Create AGENTS.md (The Map)
  createAgentsMap(gpRoot, langCode);

  // 6. Copy Templates Checklists
  const checklist = path.join(gpRoot, 'tests', 'checklist.md');
  if (!fs.existsSync(checklist)) fs.copySync(path.join(templateRoot, 'checklist.md'), checklist);

  console.log(chalk.green(`✓ Project structure created at: good-partner/`));
}

/**
 * Register project/team in team.yaml (formerly registry/projects.yaml)
 */
async function registerProject(gpRoot: string, projectSlug: string): Promise<void> {
  const teamPath = path.join(gpRoot, 'team.yaml');

  let content = '';
  if (fs.existsSync(teamPath)) {
    content = fs.readFileSync(teamPath, 'utf8');
  } else {
    content = `# Good Partner Team Registry
project_id: ${projectSlug}
updated_at: ${new Date().toISOString()}

members:
`;
  }

  if (!fs.existsSync(teamPath)) {
      fs.writeFileSync(teamPath, content);
  }
}

/**
 * Create AGENTS.md with specific path instructions
 */
function createAgentsMap(gpRoot: string, langCode: string) {
    const agentsPath = path.join(gpRoot, 'AGENTS.md');
    const content = `# AGENTS HANDBOOK

**PROTOCOL VERSION**: 1.1.0 (Spec Kit)
**LANGUAGE**: ${langCode}

## 📂 DIRECTORY MAP
AI Agents must strictly follow this directory structure:

| Directory | Purpose |
| :--- | :--- |
| \`kanban.md\` | **READ FIRST**. The Single Source of Truth for current status. |
| \`specs/\` | Requirements, Roadmap, Decisions. All "Truth" lives here. |
| \`work/\` | Active Task Tickets (T-xxxx). Update these as you work. |
| \`logs/\` | Session logs, Thinking process, Handoffs. |
| \`team.yaml\` | List of human teammates (and AI tools). |
| \`tests/\` | QA Checklists and Test Results. |

## 🤖 BEHAVIOR RULES
1. **Always Check Kanban**: Before writing code, check \`kanban.md\` to see what is "IN PROGRESS".
2. **Spec First**: Do not guess requirements. Read \`specs/\` files.
3. **Log Everything**: If you stop, write a log in \`logs/\`.

`;
    fs.writeFileSync(agentsPath, content);
}


/**
 * Install AI Adapters (No major changes, just ensure they copy correctly)
 */
export async function installAdapters(adapters: string[]): Promise<void> {
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

    if (fs.existsSync(path.join(srcBase, 'settings.json'))) {
      fs.copySync(path.join(srcBase, 'settings.json'), path.join(destBase, 'settings.json'));
    }
    if (fs.existsSync(path.join(srcBase, 'CLAUDE.md'))) {
      fs.copySync(path.join(srcBase, 'CLAUDE.md'), path.join(userRoot, 'CLAUDE.md'));
    }
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
