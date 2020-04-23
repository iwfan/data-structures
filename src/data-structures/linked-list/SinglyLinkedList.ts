type withUndef<T> = T | undefined;

export class SinglyLinkedNode<T> {
  constructor(public value?: T, public next?: SinglyLinkedNode<T>) {}

  toString(): string {
    return `${this.value}`;
  }
}

export default class SinglyLinkedList<E> {
  private length = 0;
  private head: SinglyLinkedNode<E> = new SinglyLinkedNode<E>();

  size(): number {
    return this.length;
  }

  private outOfBoundCheck(index: number): void | never {
    if (index < 0 || this.size() < index) {
      throw new Error(`Out of bound: ${index}`);
    }
  }

  add(e: E, index: number = this.size()): void {
    this.outOfBoundCheck(index);

    let curr: withUndef<SinglyLinkedNode<E>> = this.head;
    let idx = 0;

    while (idx !== index) {
      idx++;
      curr = curr?.next;
    }

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    curr!.next = new SinglyLinkedNode<E>(e, curr!.next);

    this.length++;
  }

  get(index: number): withUndef<SinglyLinkedNode<E>> {
    this.outOfBoundCheck(index);

    let curr: withUndef<SinglyLinkedNode<E>> = this.head.next;
    let idx = 0;

    while (curr != null) {
      if (index === idx) {
        return curr;
      }
      idx++;
      curr = curr.next;
    }

    return;
  }

  toString(): string {
    const result: withUndef<E>[] = [];

    let curr: withUndef<SinglyLinkedNode<E>> = this.head.next;

    while (curr != null) {
      result.push(curr.value);
      curr = curr.next;
    }

    return result.join('->');
  }
}
