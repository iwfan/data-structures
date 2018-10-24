interface StackInterface<T> {
  push(item: T): number
  push(items: Array<T>): number
  push(itemOritems: T | Array<T>): number
  pop(): T
  peek(): T
}
type Store<T> = {
  length: number
  [index: number]: T
}
const proto = Array.prototype
class Stack<T> implements StackInterface<T> {
  private store: Store<T>
  constructor() {
    this.store = (<any>Object).assign(Object.create(null), { length: 0 })
  }
  push(item: T): number
  push(items: Array<T>): number
  push(itemOritems: T | Array<T>): number {
    if (!(itemOritems instanceof Array)) {
      itemOritems = [itemOritems]
    }
    return proto.push.call(this.store, ...itemOritems)
  }
  pop(): T {
    return proto.pop.call(this.store)
  }
  peek(): T {
    return this.store[this.store.length - 1]
  }
  getItems(): Store<T> {
    return this.store
  }
}

export default Stack
