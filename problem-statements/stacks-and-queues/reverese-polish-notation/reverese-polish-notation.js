import { Stack } from "../../../data-structures/stack";

export function evalRPN(tokens) {
  const stack = new Stack();

  for (const token of tokens) {
    const tokenInt = parseInt(token);
    if (!isNaN(tokenInt)) {
      stack.push(tokenInt);
      continue;
    }

    const secondOperand = stack.pop();
    const firstOperand = stack.pop();

    if (token === "+") {
      stack.push(firstOperand + secondOperand);
    } else if (token === "-") {
      stack.push(firstOperand - secondOperand);
    } else if (token === "*") {
      stack.push(firstOperand * secondOperand);
    } else if (token === "/") {
      stack.push(parseInt(firstOperand / secondOperand));
    }
  }

  return stack.pop();
}
