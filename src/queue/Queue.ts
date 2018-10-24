import ArrayList from '../array/ArrayList'
import QueueInterface from './QueueInterface'

class Queue<T> implements QueueInterface<T> {
  private store: ArrayList<T>
  constructor() {
    this.store = new ArrayList<T>()
  }
  enqueue(item: T): number
  enqueue(items: T[]): number
  enqueue(items: T | T[]): number {
    if (!(items instanceof Array)) {
      items = [ items ]
    }
    return this.store.push(...items)
  }
  dequeue(): T {
    return this.store.shift()
  }
  front(): T {
    return this.store[0]
  }
  isEmpty(): boolean {
    return this.store.length === 0
  }
  size(): number {
    return this.store.length
  }
  clear(): boolean {
    this.store.length = 0
    return this.isEmpty()
  }
}

export default Queue