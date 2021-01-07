import { assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts"
import { repeatCharCount } from './repeat-char-count.ts'


Deno.test('repeat Char Count', () => {
 assertEquals(repeatCharCount('abcbbbwhdwahu'), { b: 4 })
})

