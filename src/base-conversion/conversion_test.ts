import { assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts"
import { dicimal2binary } from "./conversion.ts"

Deno.test("dicimal to binart", () => {
  assertEquals(dicimal2binary(2), 10);
});
