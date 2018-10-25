import SinglyNode from './SinglyNode'

interface LinkListInterface<T> {
  insert(item: T, position: number): this
  append(item: T): this
  prepend(item: T): this
  indexOf(item: T): number
  remove(item: T): this
  removeAt(position: number): this
  get(position: number): SinglyNode<T> | null
  // 获取并移除链表的第一个元素
  poll(): SinglyNode<T> | null
  first(): SinglyNode<T> | null
  size(): number
  contains(item: T): boolean
}

export default LinkListInterface