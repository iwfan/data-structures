import { assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts"
import { binary2decimal, decimal2binary } from "./conversion.ts"

Deno.test("decimal to binary", () => {
  assertEquals(decimal2binary(53), '110101');
});

Deno.test("binary to decimal", () => {
  assertEquals(binary2decimal('110101'), 53)
})
