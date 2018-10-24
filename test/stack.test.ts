import Stack from '../src/stack/Stack'

test("sum", () => {
    expect(2).toBe(2)
})

describe('Stack Test', () => {
  let s: Stack<any>
  beforeEach(() => {
    s = new Stack<any>()
  })

  afterEach(() => {
    // s = null
  })

  test('初始长度为0', () => {
    expect(s.getItems()).toEqual({ length: 0 })
  })

  test('push 单个元素', () => {
    s.push(1)
    expect(s.getItems()).toEqual({ length: 1, '0': 1 })
  })

  test('push多个元素', () => {
    s.push([1, 2, 3, 4])
    expect(s.getItems()).toEqual({
      length: 4,
      '0': 1,
      '1': 2,
      '2': 3,
      '3': 4
    })
  })

  test('查看栈顶', () => {
    s.push([1, 2, 3, 4])
    expect(s.peek()).toBe(4)
  })

  test('出栈', () => {
    s.push([1, 2, 3, 4])
    expect(s.pop()).toBe(4)
    expect(s.getItems()).toEqual({ length: 3, '0': 1, '1': 2, '2': 3 })
  })
})
