export function isPalindromeV1(s) {
  const isAlphaNumeric = (ch) => {
    const code = ch.charCodeAt(0);

    const ZERO_ASCII = "0".charCodeAt(0);
    const NINE_ASCII = "9".charCodeAt(0);
    const SMALL_A_ASCII = "a".charCodeAt(0);
    const SMALL_Z_ASCII = "z".charCodeAt(0);
    const CAP_A_ASCII = "A".charCodeAt(0);
    const CAP_Z_ASCII = "Z".charCodeAt(0);

    if (code >= ZERO_ASCII && code <= NINE_ASCII) {
      return true;
    }

    if (code >= SMALL_A_ASCII && code <= SMALL_Z_ASCII) {
      return true;
    }

    if (code >= CAP_A_ASCII && code <= CAP_Z_ASCII) {
      return true;
    }

    return false;
  };

  const N = s.length;
  let left = 0;
  let right = N - 1;

  while (left < right) {
    const leftChar = s[left];
    if (!isAlphaNumeric(leftChar)) {
      left++;
      continue;
    }

    const rightChar = s[right];
    if (!isAlphaNumeric(rightChar)) {
      right--;
      continue;
    }

    if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
      return false;
    }

    left++;
    right--;
  }

  return true;
}

export function isPalindrome(s) {
  const isAlphaNumeric = (ch) => {
    return (
      (ch.charCodeAt(0) >= "0".charCodeAt(0) &&
        ch.charCodeAt(ch) <= "9".charCodeAt(0)) ||
      (ch.charCodeAt(0) >= "A".charCodeAt(0) &&
        ch.charCodeAt(ch) <= "Z".charCodeAt(0)) ||
      (ch.charCodeAt(0) >= "a".charCodeAt(0) &&
        ch.charCodeAt(ch) <= "z".charCodeAt(0))
    );
  };

  const N = s.length;
  let left = 0;
  let right = N - 1;

  while (left < right) {
    if (!isAlphaNumeric(s[left])) left++;
    else if (!isAlphaNumeric(s[right])) right--;
    else if (s[left].toLowerCase() !== s[right].toLowerCase()) return false;
    else {
      left++;
      right--;
    }
  }

  return true;
}
