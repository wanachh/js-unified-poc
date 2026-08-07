import { existsSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { resolve } from 'node:path';

const root = process.cwd();
const configDir = resolve(root, 'config');
const configRepoUrl = 'https://github.com/wanachh/formatter-common-config.git';
const configSetup = resolve(configDir, 'setup.mjs');

const run = (command, args) => {
  execFileSync(command, args, {
    cwd: root,
    stdio: 'inherit',
  });
};

if (!existsSync(configDir)) {
  run('git', [
    'clone',
    configRepoUrl,
    'config',
  ]);
} else if (existsSync(resolve(configDir, '.git'))) {
  run('git', [
    '-C',
    'config',
    'pull',
    '--ff-only',
  ]);
}

run('npm', [
  'install',
]);

if (!existsSync(configSetup)) {
  throw new Error('Expected config/setup.mjs after initializing the shared config repo.');
}

run('node', [
  configSetup,
]);
