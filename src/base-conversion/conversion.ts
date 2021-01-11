export const decimal2binary = (decimalNumber: number): string => {
  // return Number.prototype.toString.call(decimalNumber, 2)

  let result = "";

  /**
    JS 中的数字都是浮点数类型，所以如果for循环最后一个语句写为 n /= 2, 结果就是不对的。
    但是用右移就不会有这样的问题。第二种方式就是 parseInt
  */
  for (let n = decimalNumber; n > 0; n = n >> 1) {
    result = (n % 2) + result;
  }

  return result;
}

export const binary2decimal = (binaryNumber: string): number => {
  let decimalNumber = 0

  for (let i = 0; i < binaryNumber.length; i++) {
    const binaryNum = Number(binaryNumber.charAt(i))
    // decimalNumber += binaryNum * Math.pow(2, binaryNumber.length - 1 - i);
    // a ** b, same as Math.pow(a, b)
    decimalNumber += binaryNum * 2 ** (binaryNumber.length - 1 - i);
  }

  return decimalNumber;
}
