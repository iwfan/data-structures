interface QueueInterface<T> {
  enqueue(item: T): number
  enqueue(items: T[]): number
  dequeue(): T
  front(): T
  isEmpty(): boolean
  size(): number
  clear(): boolean
}

export default QueueInterface