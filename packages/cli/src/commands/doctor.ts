import { architecture } from "./architecture.js";
import { typecheck } from "./typecheck.js";

export async function doctor() {

    console.log("==================================");
    console.log(" CommonOS Doctor");
    console.log("==================================");

    console.log("Running Architecture...");
    const a = architecture();

    console.log("Running TypeScript...");
    const t = typecheck();

    console.log("----------------------------------");

    if (a === 0 && t === 0) {
        console.log("System healthy.");
        process.exit(0);
    }

    console.log("Doctor found problems.");
    process.exit(1);

}
