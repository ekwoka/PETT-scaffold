#!/usr/bin/env node
import { join } from 'node:path';
import commandLineArgs from 'command-line-args';
import DraftLog from 'draftlog';
import { buildPackage } from './packages/buildpackage.js';
import { install } from './install.js';
import { mkdir, writeFile } from 'node:fs/promises';
import { buildBundles } from './packages/buildBundles.js';
import { exit } from 'node:process';
import {
  execShellCommand,
  inCYAN,
  inGREEN,
  intervalProgress,
  showHelp,
} from './utils/index.js';
import { optionDefinitions } from './config.js';
DraftLog(console);

console.time('App Built');

const {
  dir,
  help,
  packagemanager: packageManager,
  typescript,
  lint,
  test,
  netlify,
} = commandLineArgs(optionDefinitions);

if (help || !dir) showHelp(optionDefinitions);

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

console.timeEnd('App Built');
