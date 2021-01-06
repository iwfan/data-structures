export function dicimal2binary(dicimalNumber: number): number {
  let result = "";

  for (let n = dicimalNumber; n > 0; n / 2) {
    result = (n % 2) + result;
  }

  return Number(result);
}
