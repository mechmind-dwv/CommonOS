import { ServiceRegistry } from "../dist/runtime/ServiceRegistry.js";

const registry = new ServiceRegistry();

const logger = {
    info() {},
    warn() {},
    error() {}
};

registry.register("logger", logger);

console.assert(
    registry.resolve("logger") === logger,
    "Logger service should be resolved"
);

console.log("✓ ServiceRegistry test passed");
