import DraftLog from 'draftlog';
import { inCYAN, inGREEN } from './utils/colors.js';
import { intervalProgress } from './utils/index.js';

DraftLog(console);

let updateStatus = intervalProgress('Sleeping..');

await new Promise((res) => setTimeout(res, 5000));

updateStatus(inCYAN('Done sleeping'), inGREEN('[OK]'));

updateStatus = intervalProgress('Sleeping..');

await new Promise((res) => setTimeout(res, 5000));

updateStatus(inCYAN('Done sleeping'), inGREEN('[OK]'));

updateStatus = intervalProgress('Sleeping..');

await new Promise((res) => setTimeout(res, 5000));

updateStatus(inCYAN('Done sleeping'), inGREEN('[OK]'));

updateStatus = intervalProgress('Sleeping..');

await new Promise((res) => setTimeout(res, 5000));

updateStatus(inCYAN('Done sleeping'), inGREEN('[OK]'));

updateStatus = intervalProgress('Sleeping..');

await new Promise((res) => setTimeout(res, 5000));

updateStatus(inCYAN('Done sleeping'), inGREEN('[OK]'));
