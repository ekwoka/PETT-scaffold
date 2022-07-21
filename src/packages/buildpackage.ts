import { BASE_PACKAGE } from './BASE.js';
import { TYPESCRIPT_PACKAGE } from './TYPESCRIPT.js';
import { LINT_PACKAGE } from './LINT.js';
import { AnyObject, patchObjects } from '../utils/patchObjects.js';
import { inCYAN, inGREEN, inRED } from '../utils/colors.js';
import { makeScripts } from './makeScripts.js';

export const buildPackage = ({
  packageManager,
  typescript,
  lint,
  test,
  netlify,
}: BuildPackageOptions): AnyObject => {
  const packages: AnyObject[] = [BASE_PACKAGE];
  console.log(inCYAN('Base Content'), inGREEN('[OK]'));

  if (typescript) packages.push(TYPESCRIPT_PACKAGE);
  console.log(
    inCYAN('TypeScript'),
    typescript ? inGREEN('[OK]') : inRED('[NO]')
  );

  if (lint) packages.push(LINT_PACKAGE);
  console.log(
    inCYAN('esLint & Prettier'),
    lint ? inGREEN('[OK]') : inRED('[NO]')
  );

  /* if (test) packages.push(TEST_PACKAGE);
  if (netlify) packages.push(NETLIFY_PACKAGE);
  if (packageManager === 'pnpm') packages.push(PNPM_PACKAGE);
  console.log(inCYAN('Testing'), test ? inGREEN('[OK]') : inRED('[NO]'));
  console.log(inCYAN('Netlify'), netlify ? inGREEN('[OK]') : inRED('[NO]')); */
  console.log(
    inCYAN('Install Using'),
    inGREEN(`[${packageManager.toUpperCase()}]`)
  );

  packages.push({
    scripts: makeScripts(BASE_PACKAGE.scripts, {
      lint,
      netlify,
      test,
      typescript,
    }),
  });

  BASE_PACKAGE.scripts = {};

  const finalPackage = patchObjects(...packages);
  return finalPackage;
};

type BuildPackageOptions = {
  packageManager: string;
  typescript: boolean;
  lint: boolean;
  test: boolean;
  netlify: boolean;
};
