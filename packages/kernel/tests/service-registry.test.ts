import { ServiceRegistry } from "../src/runtime/ServiceRegistry.js";

const registry = new ServiceRegistry();

registry.register("logger", {
    info(message: string) {
        console.log(message);
    }
});

const logger = registry.resolve<{ info(message: string): void }>("logger");

if (!logger) {
    throw new Error("Logger service not found");
}

logger.info("✓ ServiceRegistry resolved service correctly");

console.log("✓ ServiceRegistry test passed");
