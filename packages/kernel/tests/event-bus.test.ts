import { EventBus } from "../dist/core/EventBus.js";

const bus = new EventBus();

let called = false;

bus.subscribe("hello", () => {
    called = true;
});

await bus.publish("hello", {});

console.assert(called);

console.log("✓ EventBus test passed");
