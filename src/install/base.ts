import ncp from 'ncp';
import { execShellCommand, intervalProgress } from '../utils/index.js';
import { CONFIG } from '../utils/config.js';
import { join } from 'node:path';
import { inCYAN, inGREEN } from '../utils/colors.js';
import { writeFile } from 'node:fs/promises';
import { AnyObject } from '../utils/patchObjects.js';

export const installBase = async (
  origin: string,
  dest: string,
  npm: string,
  json: AnyObject
): Promise<void> => {
  const status = intervalProgress('Installing base...');
  const result = await new Promise((res, rej) => {
    ncp(join(origin, 'base'), dest, CONFIG.NCP, (er) => {
      if (er) {
        return rej('failed');
      }
      res('success');
    });
  });

  if (result === 'failed') throw 'Failed to build new PETT App';
  await writeFile(join(dest, 'package.json'), JSON.stringify(json));

  await execShellCommand(`cd ${dest} && ${npm} install`);
  status(inCYAN('Installed base'), inGREEN('[OK]'));
};
