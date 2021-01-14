import { assertEquals } from "https://deno.land/std@0.83.0/testing/asserts.ts"

function indexOf(str: string, char: string): number {
  // O(n)
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === char) return i;
  }

  return -1;
}

/**
  如果字符串S中的字符移动任意位置之后，能够得到另一个字符串T，那么S就是T的回环变位。
*/
function is_circular_rotation(s: string, t: string): boolean {
  // https://algs4.cs.princeton.edu/12oop/
  // return (s.length() == t.length()) && (s.concat(s).indexOf(t) >= 0);

  for (let i = 0; i < s.length; i++) {

    const newStr = s.slice(i) + s.slice(0, i);

    if (newStr === t) {
      console.log(`查找${i}次`)
      return true;
    }

  }


  return false;
}



Deno.test("is circular rotation", () => {
  assertEquals(is_circular_rotation('ACTGACG', "TGACGAC"), true)
  assertEquals(is_circular_rotation('ACTGACG', "CGACTGA"), true)
})
