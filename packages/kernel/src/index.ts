/**
 * CommonOS MicroKernel
 *
 * The kernel coordinates modules but never implements
 * business logic.
 */

export interface Plugin {

    id: string;

    version: string;

    start(): Promise<void>;

    stop(): Promise<void>;

}

export class Kernel {

    private plugins = new Map<string, Plugin>();

    register(plugin: Plugin): void {

        if (this.plugins.has(plugin.id)) {
            throw new Error(`Plugin already registered: ${plugin.id}`);
        }

        this.plugins.set(plugin.id, plugin);

        console.log(`Registered plugin: ${plugin.id}`);

    }

    async start(): Promise<void> {

        console.log("Starting CommonOS Kernel");

        for (const plugin of this.plugins.values()) {
            await plugin.start();
        }

    }

    async stop(): Promise<void> {

        console.log("Stopping CommonOS Kernel");

        for (const plugin of this.plugins.values()) {
            await plugin.stop();
        }

    }

}
