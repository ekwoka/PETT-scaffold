import ncp from 'ncp';
import { intervalProgress } from './utils.js';
import { inCYAN, inGREEN } from './utils/colors.js';
import { CONFIG } from './utils/config';
const install = async (origin, dest, label) => {
  const status = intervalProgress(`Installing ${label}...`);
  const result = await new Promise((res, rej) => {
    ncp(origin, dest, CONFIG.NCP, (er) => {
      if (er) {
        return rej('failed');
      }
      res('success');
    });
  });
  if (result === 'failed') throw 'Failed to build new PETT App';
  status(inCYAN(`Installed ${label}`), inGREEN('[OK]'));
};
export { install };
