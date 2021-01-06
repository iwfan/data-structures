export const dicimal2binary = (dicimalNumber: number): string => {
  // return Number.prototype.toString.call(dicimalNumber, 2)

  let result = "";

  /**
    JS 中的数字都是浮点数类型，所以如果for循环最后一个语句写为 n /= 2, 结果就是不对的。
    但是用右移就不会有这样的问题。第二种方式就是 parseInt
  */
  for (let n = dicimalNumber; n > 0; n = n >> 1) {
    result = (n % 2) + result;
  }

  return result;
}

export const binary2dicimal = (binaryNumber: string): number => {
  let dicimalNumber = 0

  for (let i = 0; i < binaryNumber.length; i++) {
    const binaryNum = Number(binaryNumber.charAt(i))
    // dicimalNumber += binaryNum * Math.pow(2, binaryNumber.length - 1 - i);
    // a ** b, same as Math.pow(a, b)
    dicimalNumber += binaryNum * 2 ** (binaryNumber.length - 1 - i);
  }

  return dicimalNumber;
}
