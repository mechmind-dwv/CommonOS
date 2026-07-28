import { Logger } from "../dist/runtime/Logger.js";
import { EventBus } from "../dist/core/EventBus.js";
import { ServiceRegistry } from "../dist/runtime/ServiceRegistry.js";

function assert(condition: boolean, message: string) {
    if (!condition) {
        throw new Error(message);
    }
}

const logger = new Logger();
assert(typeof logger.info === "function", "Logger.info missing");
assert(typeof logger.warn === "function", "Logger.warn missing");
assert(typeof logger.error === "function", "Logger.error missing");

const events = new EventBus();
assert(typeof events.publish === "function", "EventBus.publish missing");

const services = new ServiceRegistry();
assert(typeof services.register === "function", "ServiceRegistry.register missing");
assert(typeof services.resolve === "function", "ServiceRegistry.resolve missing");

console.log("✓ Kernel contract compliance passed");
