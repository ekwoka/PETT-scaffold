import { join } from 'path';
import { originDirectory } from '../utils/originDirectory.js';
import { AnyObject } from '../utils/patchObjects.js';
import { Bundle } from './buildBundles.js';

export const TYPESCRIPT_PACKAGE: AnyObject = {};

export const TYPESCRIPT_BUNDLE: Bundle = {
  path: join(originDirectory, 'typescript', 'base'),
  deps: {
    dev: {
      typescript: '^4.7.3',
    },
  },
};
