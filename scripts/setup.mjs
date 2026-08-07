import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

const root = process.cwd();
const configSetup = resolve(root, 'config', 'setup.mjs');

const run = (command, args) => {
  execFileSync(command, args, { cwd: root, stdio: 'inherit' });
};

run('git', ['restore', '--source=HEAD', '--staged', '--worktree', '.gitmodules', 'biome.json', 'config']);
run('git', ['submodule', 'sync', '--recursive']);
run('git', ['submodule', 'update', '--init', '--recursive']);
run('npm', ['install']);

if (!existsSync(configSetup)) {
  throw new Error('Expected config/setup.mjs after initializing the submodule.');
}

run('node', [configSetup]);
