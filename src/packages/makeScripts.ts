export const makeScripts = (
  baseScripts: Scripts,
  { lint, typescript }: ScriptConfig
): Scripts => {
  baseScripts.build = `run-s${typescript ? ' tsc' : ''}${
    lint ? ' lint' : ''
  } build:*`;
  if (lint)
    baseScripts.lint =
      'eslint --fix src && prettier --write src --loglevel error';
  if (typescript) baseScripts.tsc = 'tsc';

  return Object.fromEntries(
    Object.entries(baseScripts).sort(([a], [b]) => a.localeCompare(b))
  );
};

type ScriptConfig = {
  lint: boolean;
  netlify: boolean;
  test: boolean;
  typescript: boolean;
};

type Scripts = {
  [key: string]: string;
};
