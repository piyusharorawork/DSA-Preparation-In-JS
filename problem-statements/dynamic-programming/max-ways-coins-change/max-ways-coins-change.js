export function maxWaysCoinsChange(coins, sum) {
  const N = coins.length;

  const countCoins = (n = N, remaining = sum) => {
    if (remaining === 0) return 1;
    if (remaining < 0 || n === 0) return 0;

    const coin = coins[n - 1];
    if (coin > remaining) {
      return countCoins(n - 1, remaining);
    }
    return (
      countCoins(n, remaining - coin) + // chosen
      countCoins(n - 1, remaining)
    ); // not chosen
  };

  return countCoins();
}
