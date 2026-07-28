import { KernelContext } from "../runtime/KernelContext.js";
import { PluginManager } from "../runtime/PluginManager.js";
import type { Plugin } from "../contracts/Plugin.js";

export class ApplicationKernel {

    readonly context = new KernelContext();

    readonly plugins = new PluginManager(this.context);

    async boot(): Promise<void> {
        this.context.logger.info("Kernel booting...");
    }

    async load(plugin: Plugin): Promise<void> {
        await this.plugins.register(plugin);
    }

    async start(): Promise<void> {
        this.context.logger.info("Kernel started");
    }

    async shutdown(): Promise<void> {
        this.context.logger.info("Kernel shutdown");
    }

}
