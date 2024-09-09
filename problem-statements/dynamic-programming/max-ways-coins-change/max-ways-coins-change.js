// Recursion
export function changeV1(amount, coins) {
  const N = coins.length;

  const countCoins = (n = N, remaining = amount) => {
    if (remaining === 0) return 1;
    if (remaining < 0 || n === 0) return 0;

    const coin = coins[n - 1];
    if (coin <= remaining)
      return countCoins(n, remaining - coin) + countCoins(n - 1, remaining);

    return countCoins(n - 1, remaining);
  };

  return countCoins();
}

// memorisation
export function changeV2(amount, coins) {
  const N = coins.length;

  const cache = Array.from({ length: N + 1 }, () =>
    new Array(amount + 1).fill(-1)
  );

  const countCoins = (n = N, remaining = amount) => {
    if (remaining === 0) return 1;
    if (remaining < 0 || n === 0) return 0;

    if (cache[n][remaining] !== -1) return cache[n][remaining];

    const coin = coins[n - 1];
    const result =
      coin <= remaining
        ? countCoins(n, remaining - coin) + countCoins(n - 1, remaining)
        : countCoins(n - 1, remaining);
    cache[n][remaining] = result;

    return result;
  };

  return countCoins();
}

// DP
export function change(amount, coins) {
  const N = coins.length;

  const table = Array.from({ length: N + 1 }, () => new Array(amount + 1));
  for (let n = 0; n < table.length; n++) {
    for (let remaining = 0; remaining < table[0].length; remaining++) {
      if (remaining === 0) table[n][remaining] = 1;
      else if (n === 0) table[n][remaining] = 0;
      else {
        const coin = coins[n - 1];
        table[n][remaining] =
          coin <= remaining
            ? table[n][remaining - coin] + table[n - 1][remaining]
            : table[n - 1][remaining];
      }
    }
  }

  return table[N][amount];
}
