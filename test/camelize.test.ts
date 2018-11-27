import camelize from '../src/case/camelize'

test('camelize test', () => {
  expect(camelize('hello-world')).toBe('HelloWorld')
  expect(camelize('Hello-world')).toBe('HelloWorld')
  expect(camelize('hello-World')).toBe('Hello-World')
})