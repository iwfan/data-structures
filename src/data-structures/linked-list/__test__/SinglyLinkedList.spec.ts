import SinglyLinkedList from '../SinglyLinkedList';

/**
 * tasking & example
 * 1. 创建链表
 *      new LinkedList
 * 2. 添加元素
 *      add(index, E)
 * 3. 查询元素
 *      get(index)
 * 4. 删除元素
 *      remove(index)
 *
 */
describe('As a singly linked list', () => {
  it('should be create empty linked list', () => {
    const linkedList = new SinglyLinkedList();
    expect(linkedList.size()).toBe(0);
  });

  it('can be add element to linked list', () => {
    const linkedList = new SinglyLinkedList();
    linkedList.add('first');
    linkedList.add('second');
    linkedList.add('third');
    linkedList.add('four', 1);
    expect(linkedList.size()).toBe(4);

    expect(linkedList.toString()).toBe(`first->four->second->third`);
  });

  it('can be queried by index', () => {
    const linkedList = new SinglyLinkedList();
    linkedList.add('Hello');
    linkedList.add('World');
    linkedList.add('TypeScript');
    linkedList.add('Algorithm');
    expect(linkedList.size()).toBe(4);
    expect(linkedList.get(1)?.value).toBe('World');
  });
});
