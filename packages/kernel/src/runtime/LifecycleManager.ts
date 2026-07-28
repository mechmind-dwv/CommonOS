import type { Plugin } from "../index.js";

export class LifecycleManager {

  async start(plugin: Plugin): Promise<void> {
    await plugin.start();
  }

  async stop(plugin: Plugin): Promise<void> {
    await plugin.stop();
  }

}
