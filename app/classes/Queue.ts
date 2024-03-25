/**
 * Queue class in TypeScript.
 * This class represents a queue data structure that follows the FIFO (First In, First Out) principle.
 * @template T The type of elements in the queue.
 */
export class Queue<T> {
    private items: T[];
    
    /**
     * Constructs a new, empty Queue.
     */
    constructor() {
        this.items = [];
    }

    /**
     * Adds an element to the end of the queue.
     * @param {T} element The element to add to the queue.
     */
    enqueue(element: T) {
        this.items.push(element);
    }

    /**
     * Removes an element from the front of the queue and returns it.
     * @returns {T | undefined} The removed element, or undefined if the queue was empty.
     */
    dequeue(): T | undefined {
        if(this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        
        return this.items.shift();
    }

    /**
     * Returns the first element in the queue without removing it.
     * @returns {T | undefined} The first element in the queue, or undefined if the queue is empty.
     */
    front(): T  {
        if(this.isEmpty()) {
            throw new Error('Queue is empty');
        }
        
        return this.items[0];
    }

    /**
     * Checks if the queue is empty.
     * @returns {boolean} True if the queue is empty, false otherwise.
     */
    isEmpty(): boolean {
        return this.items.length === 0;
    }

    /**
     * Returns the number of elements in the queue.
     * @returns {number} The number of elements in the queue.
     */
    size(): number {
        return this.items.length;
    }

    /**
     * Checks if the queue contains a specific element.
     * @param {T} element The element to check for.
     * @returns {boolean} True if the queue contains the element, false otherwise.
     */
    contains(element: T): boolean {
        return this.items.includes(element);
    }

    /**
     * Removes all elements from the queue.
     */
    clear() {
        this.items = [];
    }

    /**
     * Returns a copy of the queue as an array.
     * @returns {T[]} An array containing all elements in the queue.
     */
    toArray(): T[] {
        return [...this.items];
    }

    /**
     * Logs the elements of the queue to the console.
     */
    print() {
        console.log(this.items);
    }

    /**
     * This method is not yet implemented.
     * @param {number} year The year to check for.
     */
    fullByYear(year: number) {
        // TODO: Implement this method.
    }
}