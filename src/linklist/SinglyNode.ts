class SinglyNode<T> {
    protected element: T
    protected next: SinglyNode<T> | null
    constructor(element: T) {
      this.element = element
      this.next = null
    }
    getElement(): T {
      return this.element
    }
    getNext(): SinglyNode<T> | null {
      return this.next
    }
    setNext(next: SinglyNode<T> | null): void {
      this.next = next
    }
}

export default SinglyNode