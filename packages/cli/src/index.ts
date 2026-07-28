#!/usr/bin/env node

const version = "0.1.0";

const command = process.argv[2];

switch (command) {

  case "doctor":
    console.log("Running CommonOS Doctor...");
    break;

  case "architecture":
    console.log("Running Architecture Checks...");
    break;

  case "version":
    console.log(version);
    break;

  default:
    console.log(`
CommonOS CLI

Commands

  commonos doctor
  commonos architecture
  commonos version

`);
}
