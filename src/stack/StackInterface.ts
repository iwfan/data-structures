interface StackInterface<T> {
  push(item: T): number
  push(items: T[]): number
  pop(): T
  peek(): T
  isEmpty(): boolean
  size(): number
  clear(): boolean
}
export default StackInterface