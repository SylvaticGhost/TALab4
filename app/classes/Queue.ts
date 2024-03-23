export class Queue<T> {
    private items: T[];

    constructor() {
        this.items = [];
    }

    enqueue(element: T) {
        this.items.push(element);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }

    front(): T | undefined {
        return this.items[0];
    }

    isEmpty(): boolean {
        return this.items.length === 0;
    }

    size(): number {
        return this.items.length;
    }
    peek(index: number): T | undefined {
        return this.items[index];
    }

    contains(element: T): boolean {
        return this.items.includes(element);
    }

    clear() {
        this.items = [];
    }

    toArray(): T[] {
        return [...this.items];
    }

    print() {
        console.log(this.items);
    }
}
