import type { Plugin } from "../../kernel/src/contracts/Plugin.js";
import type { KernelContext } from "../../kernel/src/runtime/KernelContext.js";

export class ExamplePlugin implements Plugin {

  readonly id = "example-plugin";

  readonly version = "0.1.0";

  async start(context: KernelContext): Promise<void> {

    context.logger.info("ExamplePlugin started");

    await context.events.publish("example.started", {
      plugin: this.id,
      version: this.version,
      timestamp: new Date().toISOString()
    });

  }

  async stop(): Promise<void> {

    console.log("ExamplePlugin stopped");

  }

}
