import { join } from 'path';
import { originDirectory } from '../utils/originDirectory.js';
import { AnyObject } from '../utils/patchObjects.js';
import { Bundle } from './buildBundles.js';

export const BASE_PACKAGE: AnyObject = {
  name: 'pett-app-template',
  version: '0.2.3',
  description: '',
  scripts: {
    build: 'run-s build:*',
    'build:1js': 'node scripts/esbuild.mjs',
    'build:2css': 'tailwindcss -i src/tailwind.pre.css -o dist/styles.css -m',
    watch: 'run-p watch:*',
    'watch:js': 'NODE_ENV=development node scripts/esbuild.mjs',
    'watch:css': 'tailwindcss -i src/tailwind.pre.css -o dist/styles.css -w',
  },
  author: 'Eric Kwoka',
  license: 'MIT',
  pnpm: {
    peerDependencyRules: {
      ignoreMissing: ['react'],
    },
  },
};

export const BASE_BUNDLE: Bundle = {
  path: join(originDirectory, 'base'),
  deps: {
    dep: {
      '@heroicons/react': '^1.0.6',
      preact: '^10.7.3',
      'preact-router': '^4.0.1',
    },
    dev: {
      '@tailwindcss/forms': '^0.5.2',
      '@tailwindcss/typography': '^0.5.2',
      autoprefixer: '^10.4.7',
      esbuild: '^0.14.42',
      'esbuild-plugin-alias': '^0.2.1',
      'esbuild-plugin-copy': '^1.3.0',
      'npm-run-all': '^4.1.5',
      postcss: '^8.4.14',
      tailwindcss: '^3.0.24',
    },
  },
};
