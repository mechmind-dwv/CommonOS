export interface CommonOSModule {

  readonly id: string;

  readonly version: string;

  initialize(): Promise<void>;

  shutdown(): Promise<void>;

}

export abstract class BaseModule implements CommonOSModule {

  abstract readonly id: string;

  abstract readonly version: string;

  async initialize(): Promise<void> {}

  async shutdown(): Promise<void> {}

}
