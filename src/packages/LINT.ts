import { join } from 'path';
import { originDirectory } from '../utils/originDirectory.js';
import { AnyObject } from '../utils/patchObjects.js';
import { Bundle } from './buildBundles.js';

export const LINT_PACKAGE: AnyObject = {
  devDependencies: {
    '@typescript-eslint/eslint-plugin': '^5.27.0',
    '@typescript-eslint/parser': '^5.27.0',
    eslint: '^8.17.0',
    'eslint-config-preact': '^1.3.0',
    'eslint-plugin-import': '^2.26.0',
    prettier: '^2.6.2',
    'prettier-plugin-tailwindcss': '^0.1.11',
  },
  pnpm: {
    peerDependencyRules: {
      ignoreMissing: ['react'],
    },
  },
  eslintConfig: {
    extends: ['preact', 'eslint:recommended'],
    ignorePatterns: ['dist/'],
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
      },
    },
  },
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
      'eslint-config-preact': '^1.3.0',
      'eslint-plugin-import': '^2.26.0',
      prettier: '^2.6.2',
      'prettier-plugin-tailwindcss': '^0.1.11',
    },
  },
};
