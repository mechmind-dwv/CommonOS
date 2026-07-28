export class ConfigurationManager {

  private readonly values = new Map<string, unknown>();

  set<T>(key: string, value: T): void {
    this.values.set(key, value);
  }

  get<T>(key: string): T | undefined {
    return this.values.get(key) as T | undefined;
  }

  has(key: string): boolean {
    return this.values.has(key);
  }

  keys(): string[] {
    return [...this.values.keys()];
  }

}
