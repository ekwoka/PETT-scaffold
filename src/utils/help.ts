import { OptionDefinition } from 'command-line-args';
import commandLineUsage from 'command-line-usage';
import { exit } from 'node:process';

export function showHelp(options: OptionDefinition[]) {
  const help = commandLineUsage([
    {
      header: 'create-PETT-app',
      content:
        'Creates a new PETT (Preact, Eslint, Typescript, TailwindCSS) application.',
    },
    {
      header: 'Usage',
      content: [
        '$ npm init pett-app [...options] <directory>',
        '$ npm init pett-app --help',
      ],
    },
    {
      header: 'Options',
      optionList: options.filter((it) => !it.defaultOption),
    },
  ]);

  console.log(help);

  exit(0);
}
