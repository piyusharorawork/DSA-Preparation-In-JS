export function kthGrammarV1(n, k) {
  if (n === 1 && k === 1) return 0;

  const N = Math.pow(2, n - 1);
  const mid = Math.floor(N / 2);

  if (k <= mid) {
    return kthGrammar(n - 1, k);
  }
  return kthGrammar(n - 1, k - mid) === 0 ? 1 : 0;
}

export function kthGrammar(n, k) {
  if (n === 1 && k === 1) return 0;

  const N = Math.pow(2, n - 1);
  const mid = Math.floor(N / 2);

  return k <= mid ? kthGrammar(n - 1, k) : kthGrammar(n - 1, k - mid) ^ 1;
}
