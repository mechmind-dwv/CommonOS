import { spawnSync } from "node:child_process";

export function architecture(): number {

    const result = spawnSync(
        "node",
        ["scripts/architecture-check.js"],
        { stdio: "inherit" }
    );

    return result.status ?? 1;

}
