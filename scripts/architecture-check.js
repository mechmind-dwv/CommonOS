#!/usr/bin/env node

const fs = require("fs");
const { execSync } = require("child_process");

function changedFiles() {
  try {
    return execSync("git diff --name-only HEAD~1 HEAD")
      .toString()
      .trim()
      .split("\n")
      .filter(Boolean);
  } catch {
    return [];
  }
}

const files = changedFiles();

console.log("================================");
console.log(" CommonOS Architecture Check");
console.log("================================");

let failed = false;

// Rule 1
const kernelChanged = files.some(f => f.startsWith("packages/kernel/"));

if (kernelChanged) {

  const adrChanged = files.some(f =>
    f.startsWith("docs/adr/")
  );

  if (!adrChanged) {
    console.error("❌ Kernel changed without ADR.");
    failed = true;
  }

}

// Rule 2

const packageChanged = files.some(f =>
  f.endsWith("package.json")
);

if (packageChanged) {

  if (!files.includes("package-lock.json")) {

    console.error("❌ package.json changed but package-lock.json not updated.");

    failed = true;

  }

}

if (failed) {

  process.exit(1);

}

console.log("✅ Architecture checks passed.");

