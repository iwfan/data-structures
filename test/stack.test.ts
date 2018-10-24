import Stack from '../src/stack/Stack'

describe('Stack Test', () => {
  let s: Stack<any>
  beforeEach(() => {
    s = new Stack<any>()
  })

  test('初始长度为0', () => {
    expect(s.size()).toBe(0)
    expect(s.isEmpty()).toBe(true)
  })

  test('push 单个元素', () => {
    s.push(1)
    expect(s.size()).toBe(1)
    expect(s.peek()).toBe(1)
  })

  test('push多个元素', () => {
    s.push([1, 2, 3, 4])
    expect(s.size()).toBe(4)
    expect(s.peek()).toBe(4)
  })

  test('查看栈顶', () => {
    s.push([1, 2, 3, 4])
    expect(s.peek()).toBe(4)
  })

  test('出栈', () => {
    s.push([1, 2, 3, 4])
    expect(s.pop()).toBe(4)
    expect(s.size()).toBe(3)
  })
})
