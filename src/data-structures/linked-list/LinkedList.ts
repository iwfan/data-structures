interface LinkedListInterface<T> {
  size(): number;
  empty(): boolean;
  at(index: number): T | null;
  head(): T | null;
  tail(): T | null;
  insertAt(t: T, index: number): never | this;
  push(t: T): this;
  reverse(): this;
  remove(t: T): this;
}

// export class LinkedList implements LinkedListInterface {}
