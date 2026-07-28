export * from "./core/EventBus.js";
export * from "./runtime/Logger.js";
export * from "./runtime/ServiceRegistry.js";
export * from "./runtime/PluginManager.js";

export interface Plugin {

  id: string;

  version: string;

  start(): Promise<void>;

  stop(): Promise<void>;

}
