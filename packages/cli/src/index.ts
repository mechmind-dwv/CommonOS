#!/usr/bin/env node

import { doctor } from "./commands/doctor.js";
import { version } from "./commands/version.js";

const command = process.argv[2];

switch (command) {

    case "doctor":
        await doctor();
        break;

    case "version":
        version();
        break;

    default:

        console.log(`
CommonOS CLI

Commands

  commonos doctor
  commonos version

`);
}
