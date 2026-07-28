import type { Plugin } from "../contracts/Plugin.js";
import { KernelContext } from "./KernelContext.js";

export class LifecycleManager {

  constructor(
    private readonly context: KernelContext
  ) {}

  async start(plugin: Plugin): Promise<void> {
    await plugin.start(this.context);
  }

  async stop(plugin: Plugin): Promise<void> {
    await plugin.stop();
  }

}
