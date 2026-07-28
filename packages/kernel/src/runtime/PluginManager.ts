import type { Plugin } from "../index.js";

export class PluginManager {

  private plugins = new Map<string, Plugin>();

  register(plugin: Plugin): void {

    if (this.plugins.has(plugin.id)) {
      throw new Error(`Plugin already registered: ${plugin.id}`);
    }

    this.plugins.set(plugin.id, plugin);

  }

  get(id: string): Plugin | undefined {
    return this.plugins.get(id);
  }

  list(): Plugin[] {
    return [...this.plugins.values()];
  }

  async startAll(): Promise<void> {
    for (const plugin of this.plugins.values()) {
      await plugin.start();
    }
  }

  async stopAll(): Promise<void> {
    for (const plugin of this.plugins.values()) {
      await plugin.stop();
    }
  }

}
