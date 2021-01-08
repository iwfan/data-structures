export const evaluate = (expression: string): number => {
  const ops: string[] = [];
  const vals: number[] = [];

  const opsRex = /[\+|\-|\*|\/]/;
  const valsRex = /\d+/;

  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];

    if (valsRex.test(char)) {
      vals.push(Number(char));
    } else if (opsRex.test(char)) {
      ops.push(char);
    }

    if (char === ')') {
      const num1 = vals.pop();
      const num2 = vals.pop();
      const op = ops.pop();

      if (!num1 || !num2 || !op) {
        // throw error, expression syntax error
        return 0;
      }

      switch (op) {
        case '+':
          vals.push(num2 + num1);
          break;
        case '-':
          vals.push(num2 - num1);
          break;
        case '*':
          vals.push(num2 * num1);
          break;
        case '/':
          vals.push(num2 / num1);
          break;
      }
    }
  }

  return vals[0];
};
