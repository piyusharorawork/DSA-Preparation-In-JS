// Only recursive with global var and additional parameter
export function coinChangeV1(coins, amount) {
  const N = coins.length;
  let minCoins = Infinity;

  const helper = (n = N, remaining = amount, coinsUsed = 0) => {
    if (remaining === 0) {
      minCoins = Math.min(coinsUsed, minCoins);
    }
    if (n === 0) return;

    const coinValue = coins[n - 1];
    if (coinValue <= remaining) {
      return (
        helper(n, remaining - coinValue, coinsUsed + 1) ||
        helper(n - 1, remaining, coinsUsed)
      );
    }
    return helper(n - 1, remaining, coinsUsed);
  };

  helper();
  return minCoins === Infinity ? -1 : minCoins;
}

// Recursive without global vars but with parameter
export function coinChangeV2(coins, amount) {
  const N = coins.length;

  const helper = (n = N, remaining = amount, coinsUsed = 0) => {
    if (remaining === 0) {
      return coinsUsed;
    }
    if (n === 0) return Infinity;

    const coinValue = coins[n - 1];
    if (coinValue <= remaining) {
      return Math.min(
        helper(n, remaining - coinValue, coinsUsed + 1),
        helper(n - 1, remaining, coinsUsed)
      );
    }
    return helper(n - 1, remaining, coinsUsed);
  };

  const minCoins = helper();
  return minCoins === Infinity ? -1 : minCoins;
}

// Recursive without global var and extra parameter
export function coinChangeV3(coins, amount) {
  const N = coins.length;

  const helper = (n = N, remaining = amount) => {
    if (remaining === 0) {
      return 0;
    }
    if (n === 0) return Infinity;

    const coinValue = coins[n - 1];
    if (coinValue <= remaining) {
      return Math.min(
        1 + helper(n, remaining - coinValue),
        helper(n - 1, remaining)
      );
    }
    return helper(n - 1, remaining);
  };

  const minCoins = helper();
  return minCoins === Infinity ? -1 : minCoins;
}

// Recursive with common result for future caching
export function coinChangeV4(coins, amount) {
  const N = coins.length;

  const helper = (n = N, remaining = amount) => {
    if (remaining === 0) {
      return 0;
    }
    if (n === 0) return Infinity;

    const coinValue = coins[n - 1];
    const minCoins =
      coinValue <= remaining
        ? Math.min(
            1 + helper(n, remaining - coinValue),
            helper(n - 1, remaining)
          )
        : helper(n - 1, remaining);

    return minCoins;
  };

  const minCoins = helper();
  return minCoins === Infinity ? -1 : minCoins;
}

// Recursive with memorisation
export function coinChangeV5(coins, amount) {
  const N = coins.length;

  const cache = Array.from({ length: N + 1 }, () =>
    new Array(amount + 1).fill(-1)
  );

  const helper = (n = N, remaining = amount) => {
    if (remaining === 0) {
      return 0;
    }
    if (n === 0) return Infinity;

    if (cache[n][remaining] !== -1) return cache[n][remaining];

    const coinValue = coins[n - 1];
    const minCoins =
      coinValue <= remaining
        ? Math.min(
            1 + helper(n, remaining - coinValue),
            helper(n - 1, remaining)
          )
        : helper(n - 1, remaining);

    cache[n][remaining] = minCoins;

    return minCoins;
  };

  const minCoins = helper();
  return minCoins === Infinity ? -1 : minCoins;
}

// Iterative
export function coinChangeV6(coins, amount) {
  const N = coins.length;

  const table = Array.from({ length: N + 1 }, () =>
    new Array(amount + 1).fill(-1)
  );

  for (let n = 0; n < table.length; n++) {
    for (let remaining = 0; remaining < table[0].length; remaining++) {
      if (remaining === 0) table[n][remaining] = 0;
      else if (n === 0) table[n][remaining] = Infinity;
      else {
        const coinValue = coins[n - 1];
        table[n][remaining] =
          coinValue <= remaining
            ? Math.min(
                1 + table[n][remaining - coinValue],
                table[n - 1][remaining]
              )
            : table[n - 1][remaining];
      }
    }
  }

  const minCoins = table[N][amount];
  return minCoins === Infinity ? -1 : minCoins;
}

export function coinChange(coins, amount) {
  const N = coins.length;

  const dfs = (n = N, remaining = amount) => {
    if (remaining === 0) return 0;
    if (n === 0) return Infinity;

    const value = coins[n - 1];
    if (value <= remaining) {
      return Math.min(1 + dfs(n, remaining - value), dfs(n - 1, remaining));
    }
    return dfs(n - 1, remaining);
  };

  const minCoins = dfs();

  return minCoins === Infinity ? -1 : minCoins;
}
