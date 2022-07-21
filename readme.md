# Create PETT App

[<img src="https://badgen.net/npm/v/create-pett-app">](https://www.npmjs.com/package/create-pett-app) <img src="https://badgen.net/badge/types/ready/blue?icon=typescript"> <img src="https://badgen.net/npm/dt/create-pett-app" >

- Preact
- ESBuild
- TailwindCSS
- Typescript

Create PETT App scaffolds a simple directory for an app using the above technologies, so you don't have to deal with setting up the environment yourself

## How to Use

Choose your flavour:

```bash
npm init pett-app [dirname] [options]

pnpm create create-pett-app [dirname] -p pnpm [options]

yarn create pett-app -p yarn [direname]
```

Recommended:

```bash
pnpm create create-pett-app -lp pnpm [dirname]
```

Simple!!!

## Options

### Package Manager:

Defines which package manager to use when installing deps

- Long: `--packagemanager`
- Alias: `-p`
- Default: `npm`
- Acceptable Options:
  - `npm`
  - `pnpm`
  - `yarn`

### TypeScript

Allows you to disable TypeScript (Currently does not have template)

- Long: `--typescript`
- Default: `true`
- Options:
  - `true`
  - `false`

### Linting

Installs esLint and Prettier

- Long: `--lint`
- Alias: `-l`
- Default: false
- Options:
  - `true`
  - `false`

## Roadmap

- Add JS Template
- Add Option to include Netlify Template Files
- Add Option to include Testing and example tests
