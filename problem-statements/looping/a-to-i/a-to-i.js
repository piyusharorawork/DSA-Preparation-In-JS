export function myAtoi(s) {
  const N = s.length;

  let result = 0;
  let hasDigitProcessed = false;
  let isNegative = false;
  let hasSignProcessed = false;

  const INT_MAX = Math.pow(2, 31) - 1;
  const INT_MIN = -Math.pow(2, 31);

  const isDigit = (ch) => {
    const code = ch.charCodeAt(0);
    if (code < "0".charCodeAt(0)) return false;
    if (code > "9".charCodeAt(0)) return false;
    return true;
  };

  for (let i = 0; i < N; i++) {
    const ch = s[i];
    // Ignore leading spaces
    if (ch === " " && !hasDigitProcessed && !hasSignProcessed) continue;

    // Handle Negative and positive signs
    if (ch === "-" || ch === "+") {
      if (hasSignProcessed || hasDigitProcessed) break;

      isNegative = ch === "-";
      hasSignProcessed = true;
      continue;
    }

    // Non digits after handling spaces and signs
    if (!isDigit(ch)) break;

    // process digits
    hasDigitProcessed = true;
    const digitVal = ch.charCodeAt(0) - "0".charCodeAt(0);

    if (
      result > Math.floor(INT_MAX / 10) ||
      (result === Math.floor(INT_MAX / 10) && digitVal > INT_MAX % 10) // Very edge cases
    ) {
      return isNegative ? INT_MIN : INT_MAX;
    }

    // Forming number
    result = result * 10 + digitVal;
  }

  if (isNegative) result *= -1;

  return result;
}
