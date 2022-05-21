#!/usr/bin/env node
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import ncp from 'ncp';
import commandLineArgs from 'command-line-args';
import DraftLog from 'draftlog';
import { exec } from 'child_process';
DraftLog(console);

console.time('completed');
function execShellCommand(cmd) {
  return new Promise((res) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error) {
        console.warn(error);
      }
      res(stdout ? stdout : stderr);
    });
  });
}

function draftWithArrow(text = '') {
  let step = 1;
  const updateStatus = console.draft(`=> ${text}`);
  return (text = '') => {
    step++;
    updateStatus(`${'='.repeat(step)}> ${text}`);
  };
}

const optionDefinitions = [
  { name: 'dir', type: String, defaultOption: true },
  { name: 'package-manager', alias: 'p', type: String, defaultValue: 'npm' }
];

const options = commandLineArgs(optionDefinitions);

const dest = options.dir ? `${options.dir}` : 'new-pett-app';
const packageManager = ['pnpm', 'npm', 'yarn'].includes(options.packageManager) ? `${options.packageManager}` : 'npm';

const updateStatus = draftWithArrow('Building New PETT App...');

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

let ncpConfig = {
  clobber: false
};
const result = await new Promise((res, rej) => {
  ncp(path.resolve(__dirname, '../dist'), dest, ncpConfig, (er) => {
    if (er) {
      updateStatus('Failed to build new PETT App');
      return rej('failed');
    }
    updateStatus(`Copied files to ${dest}`);
    res('success');
  });
});

if (result === 'failed') throw 'Failed to build new PETT App';

updateStatus('Installing dependencies...');
let updateProgress = draftWithArrow();
let progressInterval = setInterval(() => updateProgress(), 500);

await execShellCommand(`cd ${dest} && ${packageManager} install`);
clearInterval(progressInterval);
updateProgress('DONE Installing!');

updateStatus('Building app...');
updateProgress = draftWithArrow();
progressInterval = setInterval(() => updateProgress(), 500);

await execShellCommand(`cd ${dest} && ${packageManager} run build`);
clearInterval(progressInterval);
updateProgress('DONE Building!');

updateStatus('PETT App Successfully Installed');

console.log('Enjoy your new App!');
console.log(`Just 'cd ${dest}' and Enjoy!!!`);

console.timeEnd('completed');
