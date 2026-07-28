export interface ServiceDefinition<T = unknown> {
  id: string;
  implementation: T;
}

export class ServiceRegistry {
  private services = new Map<string, unknown>();

  register<T>(service: ServiceDefinition<T>): void {
    if (this.services.has(service.id)) {
      throw new Error(`Service already registered: ${service.id}`);
    }

    this.services.set(service.id, service.implementation);
  }

  resolve<T>(id: string): T {
    const service = this.services.get(id);

    if (!service) {
      throw new Error(`Unknown service: ${id}`);
    }

    return service as T;
  }

  has(id: string): boolean {
    return this.services.has(id);
  }

  list(): string[] {
    return [...this.services.keys()];
  }
}
