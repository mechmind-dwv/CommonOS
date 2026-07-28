import { spawnSync } from "node:child_process";

export function typecheck(): number {

    const result = spawnSync(
        "npx",
        ["tsc","--build"],
        { stdio: "inherit" }
    );

    return result.status ?? 1;

}
