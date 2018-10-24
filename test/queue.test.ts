import Queue from '../src/queue/Queue'

describe('Stack Test', () => {
  let s: Queue<any>
  beforeEach(() => {
    s = new Queue<any>()
  })

  test('初始长度为0', () => {
    expect(s.size()).toBe(0)
    expect(s.isEmpty()).toBe(true)
  })

  test('入队单个元素', () => {
    s.enqueue(1)
    expect(s.size()).toBe(1)
    expect(s.front()).toBe(1)
  })

  test('入队多个元素', () => {
    s.enqueue([1, 2, 3, 4])
    expect(s.size()).toBe(4)
    expect(s.front()).toBe(1)
  })

  test('查看队头', () => {
    s.enqueue([1, 2, 3, 4])
    expect(s.front()).toBe(1)
  })

  test('出队', () => {
    s.enqueue([1, 2, 3, 4])
    expect(s.dequeue()).toBe(1)
    expect(s.size()).toBe(3)
  })
})
