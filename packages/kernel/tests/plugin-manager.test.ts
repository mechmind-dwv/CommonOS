import { PluginManager } from "../dist/runtime/PluginManager.js";
import { KernelContext } from "../dist/runtime/KernelContext.js";
import type { Plugin } from "../dist/contracts/Plugin.js";

class FakePlugin implements Plugin {

    id="fake";

    version="1.0";

    async start(ctx: KernelContext){

        ctx.logger.info("started");

    }

    async stop(){}

}

const manager=new PluginManager(new KernelContext());

await manager.register(new FakePlugin());

console.log("✓ PluginManager test passed");
