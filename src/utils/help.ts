import { OptionDefinition } from 'command-line-args';
import commandLineUsage from 'command-line-usage';

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
        '$ npx create-pett-app [...options] <directory>',
        '$ npx create-pett-app --help',
      ],
    },
    {
      header: 'Options',
      optionList: options,
    },
  ]);

  console.log(help);
}
