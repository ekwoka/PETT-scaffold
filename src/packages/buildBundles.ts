import { Dependencies } from '../install.js';
import { BASE_BUNDLE } from './BASE.js';
import { LINT_BUNDLE } from './LINT.js';
import { TYPESCRIPT_BUNDLE } from './TYPESCRIPT.js';

export const buildBundles = ({
  typescript,
  lint,
  test,
  netlify,
}: BuildBundleOptions): Bundles => {
  const bundles: Bundles = { 'Base Structure': BASE_BUNDLE };
  if (typescript) bundles['TypeScript'] = TYPESCRIPT_BUNDLE;
  if (lint) bundles['esLint and Prettier'] = LINT_BUNDLE;
  return bundles;
};

type BuildBundleOptions = {
  lint: boolean;
  netlify: boolean;
  test: boolean;
  typescript: boolean;
};

export type Bundle = {
  path: string;
  deps: Dependencies;
};

type Bundles = Record<string, Bundle>;
