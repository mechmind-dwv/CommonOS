export type EventHandler<T = unknown> = (event: T) => void | Promise<void>;

export class EventBus {

    private handlers = new Map<string, EventHandler[]>();

    subscribe(event: string, handler: EventHandler) {

        const list = this.handlers.get(event) ?? [];

        list.push(handler);

        this.handlers.set(event, list);

    }

    async publish(event: string, payload?: unknown) {

        const list = this.handlers.get(event);

        if (!list) return;

        for (const handler of list) {

            await handler(payload);

        }

    }

}
