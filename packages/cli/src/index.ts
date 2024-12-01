#!/usr/bin/env node
import { Command } from 'commander';

import packageJson from '../package.json';

process.on('SIGINT', () => process.exit(0));
process.on('SIGTERM', () => process.exit(0));

async function main() {
  const program = new Command()
    .name('learn-everything')
    .description(
      'A collection of tasks and exercises for practicing and learning new programming languages!',
    )
    .version(
      packageJson.version || '1.0.0',
      '-v, --version',
      'display the version number',
    );

  program.parse();
}

main();
