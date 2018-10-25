import LinkListInterface from './LinkListInterface'
import SinglyNode from './SinglyNode'

class LinkList<T> implements LinkListInterface<T> {
  private linkHead: SinglyNode<T> | null
  private linkTail: SinglyNode<T> | null
  private length: number
  constructor() {
    this.linkHead = null
    this.linkTail = null
    this.length = 0
  }
  private outOfBoundCheck(position: number): void {
    if (position < 0 || position > this.length)
      throw new RangeError('position out of bound')
  }
  insert(item: T, position: number): this {
    this.outOfBoundCheck(position)
    const node = new SinglyNode<T>(item)
    if (!this.linkHead) {
      this.linkHead = this.linkTail = node
    } else {
      if (position === 0) {
        node.setNext(this.linkHead)
        this.linkHead = node
      } else if (position === this.length) {
        ;(<SinglyNode<T>>this.linkTail).setNext(node)
        this.linkTail = node
      } else {
        const current = this.get(position)
        const next = (<SinglyNode<T>>current).getNext()
        ;(<SinglyNode<T>>current).setNext(node)
        node.setNext(<SinglyNode<T>>next)
      }
    }
    this.length++
    return this
  }
  prepend(item: T): this {
    return this.insert(item, 0)
  }
  append(item: T): this {
    return this.insert(item, this.length)
  }
  first(): SinglyNode<T> | null {
    return this.linkHead
  }
  last(): SinglyNode<T> | null {
    return this.linkTail
  }
  poll(): SinglyNode<T> | null {
    const first = this.first()
    if (!first) return null
    this.linkHead = first.getNext()
    this.length--
    return first
  }
  get(position: number): SinglyNode<T> | null {
    let index = 0
    let current = this.first()
    for (; index < position; index++) {
      current = (<SinglyNode<T>>current).getNext()
    }
    return current
  }
  indexOf(item: T): number {
    let index = 0
    let current = this.first()
    while (current) {
      var element = current.getElement()
      if (element === item) {
        return index
      }
      index++
      current = current.getNext()
    }
    return -1
  }
  contains(item: T): boolean {
    return this.indexOf(item) !== -1
  }
  remove(item: T): this {
    const position: number = this.indexOf(item)
    return this.removeAt(position)
  }
  removeAt(position: number): this {
    this.outOfBoundCheck(position)
    const node = this.get(position)
    if (position === 0) {
      this.linkHead = (<SinglyNode<T>>this.linkHead).getNext()
    } else if (position === this.length - 1) {
      const prev = this.get(position - 1)
      if (prev) {
        prev.setNext(null)
      }
      this.linkTail = prev || null
    } else {
      const prev = this.get(position - 1)
      ;(<SinglyNode<T>>prev).setNext((<SinglyNode<T>>node).getNext())
    }
    this.length--
    return this
  }
  size(): number {
    return this.length
  }
}

export default LinkList
