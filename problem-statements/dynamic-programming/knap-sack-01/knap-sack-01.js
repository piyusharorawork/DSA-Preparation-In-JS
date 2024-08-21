// With only recursion
export function maxProfitV1(itemCount, itemWeights, itemPrices, bagCapcity) {
  const helper = (
    n = itemCount,
    weights = itemWeights,
    prices = itemPrices,
    capacity = bagCapcity
  ) => {
    if (n === 0 || capacity === 0) return 0;

    const price = prices[n - 1];
    const weight = weights[n - 1];

    if (weight > capacity) {
      return helper(n - 1, weights, prices, capacity);
    }

    // profit when item is included in the bag
    const profitIncluded =
      price + helper(n - 1, weights, prices, capacity - weight);

    // profit when item is not included in the bag
    const profitNotIncluded = helper(n - 1, weights, prices, capacity);

    return Math.max(profitIncluded, profitNotIncluded);
  };

  return helper();
}

// With Memorisation
export function maxProfitV2(itemCount, itemWeights, itemPrices, bagCapcity) {
  const MAX_CAPACITY = 50;
  const MAX_ITEM_COUNT = 100;

  const table = new Array(MAX_ITEM_COUNT + 1);
  for (let i = 0; i < MAX_ITEM_COUNT; i++) {
    table[i] = new Array(MAX_CAPACITY + 1).fill(-1);
  }

  const helper = (
    n = itemCount,
    weights = itemWeights,
    prices = itemPrices,
    capacity = bagCapcity
  ) => {
    if (n === 0 || capacity === 0) return 0;

    const price = prices[n - 1];
    const weight = weights[n - 1];

    // Read Cache
    const cachedMaxProfit = table[n][capacity];
    if (cachedMaxProfit !== -1) return cachedMaxProfit;

    if (weight > capacity) {
      return helper(n - 1, weights, prices, capacity);
    }

    // profit when item is included in the bag
    const profitIncluded =
      price + helper(n - 1, weights, prices, capacity - weight);

    // profit when item is not included in the bag
    const profitNotIncluded = helper(n - 1, weights, prices, capacity);

    const maxProfit = Math.max(profitIncluded, profitNotIncluded);
    // Write cache
    table[n][capacity] = maxProfit;

    return maxProfit;
  };

  return helper();
}

// With top down approach
export function maxProfitV3(itemCount, itemWeights, itemPrices, bagCapcity) {
  const table = new Array(itemCount + 1);
  for (let i = 0; i < itemCount + 1; i++) {
    table[i] = new Array(bagCapcity + 1);
  }

  for (let r = 0; r < table.length; r++) {
    for (let c = 0; c < table[0].length; c++) {
      if (r === 0 || c === 0) table[r][c] = 0;
      else {
        const price = itemPrices[r - 1];
        const weight = itemWeights[r - 1];

        if (weight > c) {
          table[r][c] = table[r - 1][c];
        } else {
          const profitIncluded = price + table[r - 1][c - weight];
          const profitNotIncluded = table[r - 1][c];

          table[r][c] = Math.max(profitIncluded, profitNotIncluded);
        }
      }
    }
  }

  return table[itemCount][bagCapcity];
}

export function maxProfit(itemCount, weights, prices, capacity) {
  const table = new Array(itemCount + 1);
  for (let i = 0; i < table.length; i++) {
    table[i] = new Array(capacity + 1);
  }

  for (
    let currentItemCount = 0;
    currentItemCount < table.length;
    currentItemCount++
  ) {
    for (
      let currentCapacity = 0;
      currentCapacity < table[0].length;
      currentCapacity++
    ) {
      // Base condition
      if (currentItemCount === 0 || currentCapacity === 0)
        table[currentItemCount][currentCapacity] = 0;
      else {
        // decision tree
        const weight = weights[currentItemCount - 1];
        const price = prices[currentItemCount - 1];

        if (weight <= currentCapacity) {
          const profitWithItemIncluded =
            price + table[currentItemCount - 1][currentCapacity - weight];
          const profitWithoutItemIncluded =
            table[currentItemCount - 1][currentCapacity];
          const maximumProfit = Math.max(
            profitWithItemIncluded,
            profitWithoutItemIncluded
          );
          table[currentItemCount][currentCapacity] = maximumProfit;
        } else {
          table[currentItemCount][currentCapacity] =
            table[currentItemCount - 1][currentCapacity];
        }
      }
    }
  }

  return table[itemCount][capacity];
}
