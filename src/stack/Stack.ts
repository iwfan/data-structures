import ArrayList from "../array/ArrayList"
import StackInterface from './StackInterface'
class Stack<T> implements StackInterface<T> {
  private store: ArrayList<T>
  constructor() {
    this.store = new ArrayList<T>()
  }
  push(item: T): number
  push(items: T[]): number
  push(itemOritems: T | T[]): number {
    if (!(itemOritems instanceof Array)) {
      itemOritems = [itemOritems]
    }
    return this.store.push(...itemOritems)
  }
  pop(): T {
    return this.store.pop()
  }
  peek(): T {
    return this.store[this.store.length - 1]
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

export default Stack
