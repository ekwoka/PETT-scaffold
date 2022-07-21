import { join } from 'path';
import { originDirectory } from '../utils/originDirectory.js';
import { AnyObject } from '../utils/patchObjects.js';
import { Bundle } from './buildBundles.js';

export const TYPESCRIPT_PACKAGE: AnyObject = {
  eslintConfig: {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    extends: [
      'preact',
      'plugin:import/typescript',
      'plugin:@typescript-eslint/eslint-recommended',
      'plugin:@typescript-eslint/recommended',
      'eslint:recommended',
    ],
    ignorePatterns: ['dist/'],
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
    rules: {
      '@typescript-eslint/ban-ts-comment': 'off',
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error'],
    },
  },
};

export const TYPESCRIPT_BUNDLE: Bundle = {
  path: join(originDirectory, 'typescript', 'base'),
  deps: {
    dev: {
      typescript: '^4.7.3',
    },
  },
};
