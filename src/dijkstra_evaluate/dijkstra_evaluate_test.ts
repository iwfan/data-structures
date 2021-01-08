import { assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts"
import { evaluate } from "./dijkstra_evaluate.ts"


Deno.test('Dijkstra Evaluate', () => {
  const expression = `(1 + ( (2 + 3) * (4 * 5) ) )`
  assertEquals(evaluate(expression), 101)
})
