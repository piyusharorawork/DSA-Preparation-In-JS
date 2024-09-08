import { Stack } from "../../../data-structures/stack/stack";

export function calculateV1(s) {
  const N = s.length;
  let result = 0;
  let sign = 1;
  const stack = new Stack();

  const isDigit = (ch) => {
    return (
      ch.charCodeAt(0) >= "0".charCodeAt(0) &&
      ch.charCodeAt(0) <= "9".charCodeAt(0)
    );
  };

  for (let i = 0; i < N; i++) {
    if (s[i] === " ") continue;
    if (isDigit(s[i])) {
      let num = 0;
      while (i < N && isDigit(s[i])) {
        const digit = s[i].charCodeAt(0) - "0".charCodeAt(0);
        num = num * 10 + digit;
        i++;
      }
      result += num * sign;
      i--; // adjust for the extra increment
    } else if (s[i] === "+") sign = 1;
    else if (s[i] === "-") sign = -1;
    else if (s[i] === "(") {
      stack.push(result);
      stack.push(sign);
      // reset result and sign
      sign = 1;
      result = 0;
    } else if (s[i] === ")") {
      const sign = stack.pop();
      const lastRes = stack.pop();
      result = result * sign + lastRes;
    }
  }

  return result;
}

export function calculate(s) {
  const isDigit = (ch) =>
    ch.charCodeAt(0) >= "0".charCodeAt(0) &&
    ch.charCodeAt(0) <= "9".charCodeAt(0);
  const stack = new Stack();
  const N = s.length;
  let sign = 1; // positive
  let result = 0;
  for (let i = 0; i < N; i++) {
    if (s[i] === " ") continue;
    if (s[i] === "+") sign = 1;
    else if (s[i] === "-") sign = -1;
    else if (isDigit(s[i])) {
      let num = 0;
      while (i < N && isDigit(s[i])) {
        const digit = s[i].charCodeAt(0) - "0".charCodeAt(0);
        num = num * 10 + digit;
        i++;
      }
      result += sign * num;
      i--; // adjust for extra increment
    } else if (s[i] === "(") {
      stack.push(result);
      stack.push(sign);
      sign = 1;
      result = 0;
    } else {
      const sign = stack.pop();
      const lastRes = stack.pop();
      result = result * sign + lastRes;
    }
  }
  return result;
}
