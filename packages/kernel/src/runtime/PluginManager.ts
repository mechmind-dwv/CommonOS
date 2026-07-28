import type { Plugin } from "../contracts/Plugin.js";
import { KernelContext } from "./KernelContext.js";

export class PluginManager {

  private readonly plugins = new Map<string, Plugin>();

  constructor(
    private readonly context: KernelContext
  ) {}

  register(plugin: Plugin): void {

    if (this.plugins.has(plugin.id)) {
      throw new Error(`Plugin already registered: ${plugin.id}`);
    }

    this.plugins.set(plugin.id, plugin);
  }

  async startAll(): Promise<void> {
    for (const plugin of this.plugins.values()) {
      await plugin.start(this.context);
    }
  }

  async stopAll(): Promise<void> {
    for (const plugin of this.plugins.values()) {
      await plugin.stop();
    }
  }

  getContext(): KernelContext {
    return this.context;
  }
}
