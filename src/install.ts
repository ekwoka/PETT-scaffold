import ncp from 'ncp';
import { execShellCommand, intervalProgress } from './utils/index.js';
import { inCYAN, inGREEN } from './utils/colors.js';
import { CONFIG } from './utils/config.js';

export const install = async (
  origin: string,
  dest: string,
  label: string,
  npm: string,
  deps: Dependencies
): Promise<void> => {
  const status = intervalProgress(`Installing ${label}...`);
  const result = await new Promise((res, rej) => {
    if (!origin) return res('success');
    ncp(origin, dest, CONFIG.NCP, (er) => {
      if (er) {
        return rej('failed');
      }
      res('success');
    });
  });

  if (result === 'failed') throw 'Failed to build new PETT App';

  const commands = Object.entries(deps ?? {}).map(
    ([type, deps]) =>
      `cd ${dest} && ${pmCommands[type][npm]} ${Object.entries(deps)
        .map((dep) => parseDep(...dep))
        .join(' ')}`
  );

  for await (const command of commands) await execShellCommand(command);

  status(inCYAN(`Installed ${label}`), inGREEN('[OK]'));
};

const parseDep = (dep: string, version: string) => `${dep}@${version}`;

export type Dependencies = {
  dep?: Dependency;
  dev?: Dependency;
};

type Dependency = {
  [key: string]: string;
};

const pmCommands: Record<string, Record<string, string>> = {
  dep: {
    npm: 'npm install',
    yarn: 'yarn add',
    pnpm: 'pnpm add',
    bun: 'bun add',
  },
  dev: {
    npm: 'npm install -D',
    yarn: 'yarn add -D',
    pnpm: 'pnpm add -D',
    bun: 'bun add',
  },
};
