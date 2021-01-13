import { assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts"
import { isPalindrome } from "./is-polindrome.ts"

Deno.test('is palindrome', () => {
  assertEquals(isPalindrome('abcba'), true)
  assertEquals(isPalindrome('abcbad'), false)
  assertEquals(isPalindrome('a,b c.b a '), true)
})
