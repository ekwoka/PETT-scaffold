import { join } from 'path';
import { originDirectory } from '../utils/originDirectory.js';
import { AnyObject } from '../utils/patchObjects.js';
import { Bundle } from './buildBundles.js';

export const LINT_PACKAGE: AnyObject = {
  prettier: {
    singleQuote: true,
    bracketSameLine: true,
    tailwindConfig: 'tailwind.config.js',
    plugins: ['prettier-plugin-tailwindcss'],
  },
};

export const LINT_BUNDLE: Bundle = {
  path: '',
  deps: {
    dev: {
      '@typescript-eslint/eslint-plugin': '^5.27.0',
      '@typescript-eslint/parser': '^5.27.0',
      eslint: '^8.17.0',
      'eslint-plugin-import': '^2.26.0',
      prettier: '^2.6.2',
      'prettier-plugin-tailwindcss': '^0.1.11',
      'eslint-plugin-compat': '^4.0.0',
      'eslint-plugin-react': '^7.27.0',
      'eslint-plugin-react-hooks': '^4.3.0',
    },
  },
};
