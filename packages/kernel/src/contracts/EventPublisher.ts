export interface EventPublisher {

  publish(
    event: string,
    payload?: unknown
  ): Promise<void>;

}
