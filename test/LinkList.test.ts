import LinkList from '../src/linklist/LinkList'
import SinglyNode from '../src/linklist/SinglyNode'

describe('单向链表测试', () => {
  let linkList: LinkList<any>
  beforeEach(() => {
    linkList = new LinkList<any>()
  })

  test('初始化长度为0', () => {
    expect(linkList.size()).toBe(0)
    expect(linkList.first()).toBeNull
    expect(linkList.poll()).toBeNull
  })

  test('insert方法测试1, 越界异常', () => {
    expect(() => { linkList.insert(2, 1)}).toThrow()
  })

  test('insert 2, 插入单个元素', () => {
    linkList.insert(2, 0)
    expect(linkList.size()).toBe(1)
    expect((<SinglyNode<number>>linkList.first()).getElement()).toBe(2)
    expect((<SinglyNode<number>>linkList.poll()).getElement()).toBe(2)
    expect(linkList.size()).toBe(0)
    expect(linkList.last()).toBeNull
    expect(linkList.first()).toBeNull
  })

  test('append & indexOf', () => {
    linkList.append(1)
    linkList.append(2)
    expect(linkList.size()).toBe(2)
    expect(linkList.indexOf(1)).toBe(0)
    expect(linkList.indexOf(2)).toBe(1)
    expect(linkList.indexOf(3)).toBe(-1)
  })
  test('prepend & indexOf', () => {
    linkList.prepend(1)
    linkList.prepend(2)
    expect(linkList.size()).toBe(2)
    expect(linkList.indexOf(1)).toBe(1)
    expect(linkList.indexOf(2)).toBe(0)
    expect(linkList.indexOf(3)).toBe(-1)
  })
  test('contains', () => {
    linkList.append(1)
    linkList.append(2)
    linkList.append(3)
    linkList.append(4)
    linkList.append(5)

    expect(linkList.size()).toBe(5)
    expect((<SinglyNode<number>>linkList.first()).getElement()).toBe(1)
    expect((<SinglyNode<number>>linkList.last()).getElement()).toBe(5)

    expect(linkList.contains(3)).toBe(true)
    expect(linkList.contains(6)).toBe(false)
  })
  test('remove & removeAt', () => {
    linkList.append(1)
    linkList.append(2)
    linkList.append(3)
    linkList.append(4)
    linkList.append(5)

    expect(linkList.size()).toBe(5)
    expect((<SinglyNode<number>>linkList.first()).getElement()).toBe(1)
    expect((<SinglyNode<number>>linkList.last()).getElement()).toBe(5)

    // expect(linkList.remove(6)).toThrowError()
    linkList.remove(1)
    expect((<SinglyNode<number>>linkList.first()).getElement()).toBe(2)
    linkList.remove(5)
    expect((<SinglyNode<number>>linkList.last()).getElement()).toBe(4)

    expect(linkList.size()).toBe(3)
    linkList.removeAt(1)
    expect((<SinglyNode<number>>linkList.first()).getElement()).toBe(2)
    expect((<SinglyNode<number>>linkList.last()).getElement()).toBe(4)
    
    expect(linkList.size()).toBe(2)

    expect(((<SinglyNode<number>>linkList.first()).getNext())).toBe((<SinglyNode<number>>linkList.last()))
  })
})
