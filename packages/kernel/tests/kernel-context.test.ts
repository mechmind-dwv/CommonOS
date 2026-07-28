import { KernelContext } from "../dist/runtime/KernelContext.js";

const ctx = new KernelContext();

console.log("logger:", !!ctx.logger);
console.log("events:", !!ctx.events);
console.log("services:", !!ctx.services);
console.log("config:", !!ctx.config);

console.assert(ctx.logger, "logger missing");
console.assert(ctx.events, "events missing");
console.assert(ctx.services, "services missing");
console.assert(ctx.config, "config missing");

console.log("✓ KernelContext test passed");
