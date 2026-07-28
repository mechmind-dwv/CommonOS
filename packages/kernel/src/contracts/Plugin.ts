import type { KernelContext } from "../runtime/KernelContext.js";

export interface Plugin {

  readonly id: string;

  readonly version: string;

  start(context: KernelContext): Promise<void>;

  stop(): Promise<void>;

}
