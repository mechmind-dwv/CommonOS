import { EventBus } from "../core/EventBus.js";
import { Logger } from "./Logger.js";
import { ServiceRegistry } from "./ServiceRegistry.js";
import { ConfigurationManager } from "./ConfigurationManager.js";

export class KernelContext {

  readonly events = new EventBus();

  readonly logger = new Logger();

  readonly services = new ServiceRegistry();

  readonly configuration = new ConfigurationManager();

}
