#!/usr/bin/env node
import { join } from 'node:path';
import commandLineArgs from 'command-line-args';
import DraftLog from 'draftlog';
import { execShellCommand, intervalProgress } from './utils/index.js';
import { inCYAN, inGREEN } from './utils/colors.js';
import { buildPackage } from './packages/buildpackage.js';
import { install } from './install.js';
import { mkdir, writeFile } from 'node:fs/promises';
import { buildBundles } from './packages/buildBundles.js';
DraftLog(console);

console.time('completed');

const optionDefinitions = [
  {
    name: 'dir',
    type: String,
    defaultOption: true,
    defaultValue: 'new-pett-app',
  },
  {
    name: 'packagemanager',
    alias: 'p',
    type: (pm: string) =>
      ['pnpm', 'npm', 'yarn', 'bun'].includes(pm) ? pm : 'npm',
    defaultValue: 'npm',
  },
  {
    name: 'typescript',
    alias: 'T',
    type: (T: string) => !(T === 'false'),
    defaultValue: 'true',
  },
  { name: 'lint', alias: 'l', type: Boolean, defaultValue: false },
  { name: 'test', alias: 't', type: Boolean, defaultValue: false },
  { name: 'netlify', alias: 'n', type: Boolean, defaultValue: false },
];

const {
  dir,
  packagemanager: packageManager,
  typescript,
  lint,
  test,
  netlify,
} = commandLineArgs(optionDefinitions);

const updateStatus = intervalProgress('Building New PETT App...');

const packageJSON = buildPackage({
  packageManager,
  typescript,
  lint,
  test,
  netlify,
});
await mkdir(dir, { recursive: true });
await writeFile(join(dir, 'package.json'), JSON.stringify(packageJSON));

const bundles = buildBundles({
  typescript,
  lint,
  test,
  netlify,
});

for await (const pkg of Object.entries(bundles)) {
  const [label, { path, deps }] = pkg;
  await install(path, dir, label, packageManager, deps);
}

const updateBuild = intervalProgress('Building Project...');
await execShellCommand(`cd ${dir} && ${packageManager} run build`);
updateBuild(inCYAN('Project Built'), inGREEN('[OK]'));

updateStatus(inGREEN('PETT App Successfully Installed'));

console.log('Enjoy your new App!');
console.log(`Just 'cd ${dir}' and Enjoy!!!`);

console.timeEnd('completed');
