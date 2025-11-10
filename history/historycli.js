#!/usr/bin/env bun

function rethread(path) {
  console.log('rethread');
}

function main(subcommand, path) {
  switch (subcommand) {
    case 'rethread':
      rethread(path);
      break;
    default:
      console.log('Unknown subcommand');
  }
}

const args = process.argv.slice(2);
const subcommand = args[0];
const path = args[1];
main(subcommand, path);
