export function coinChange(coins, amount) {
  if (amount === 0) return 0;
  const coinsCount = coins.length;

  const table = new Array(coinsCount);
  for (let i = 0; i < coinsCount; i++) {
    table[i] = new Array(amount + 1).fill(0);
  }

  for (let r = 0; r < table.length; r++) {
    for (let c = 0; c < table[0].length; c++) {
      if (r === 0) {
        table[r][c] = c;
      } else if (coins[r] > c) {
        table[r][c] = table[r - 1][c];
      } else {
        table[r][c] = 1 + table[c - coins[r]][c];
      }
    }
  }

  return table[coinsCount - 1][amount];
}
