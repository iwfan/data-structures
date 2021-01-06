import { assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts"
import { search } from "./binary-search.ts"

Deno.test("binary searching case #1", () => {
  const list = [10, 11, 12, 16, 18, 23, 29, 33, 48, 54, 57, 68, 77, 84, 98];
  assertEquals(search<number>(list)(23), 5);
});

Deno.test('binary search case #2', () => {
  assertEquals(search<number>([1, 3, 5, 7, 8, 9])(5), 2);
});

Deno.test('binary search case #3', () => {
  assertEquals(search<number>([1, 3, 5, 7, 8, 9])(6), -1);
});

