#!/usr/bin/env node

const { execSync } = require("child_process");

const tasks = [
  {
    name: "Architecture",
    command: "node scripts/architecture-check.js"
  },
  {
    name: "TypeScript",
    command: "npx tsc --build"
  }
];

let failed = false;

console.log("==================================");
console.log(" CommonOS Doctor");
console.log("==================================");

for (const task of tasks) {

  process.stdout.write(`Running ${task.name}... `);

  try {

    execSync(task.command, {
      stdio: "ignore"
    });

    console.log("OK");

  } catch {

    console.log("FAILED");

    failed = true;

  }

}

console.log("----------------------------------");

if (failed) {

  console.log("Doctor found problems.");

  process.exit(1);

}

console.log("System healthy.");
