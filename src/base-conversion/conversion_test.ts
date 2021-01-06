import { assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts"
import { binary2dicimal, dicimal2binary } from "./conversion.ts"

Deno.test("dicimal to binary", () => {
  assertEquals(dicimal2binary(53), '110101');
});

Deno.test("binary to dicimal", () => {
  assertEquals(binary2dicimal('110101'), 53)
})
