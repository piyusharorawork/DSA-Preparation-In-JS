// Only recursion
export function jobSchedulingV1(startTime, endTime, profit) {
  const N = startTime.length;
  const jobs = new Array(N);

  // create jobs
  for (let i = 0; i < N; i++) {
    jobs[i] = {
      startTime: startTime[i],
      endTime: endTime[i],
      profit: profit[i],
    };
  }

  jobs.sort((a, b) => a.endTime - b.endTime);

  const getNextJobIndex = (index) => {
    let i = index - 1;
    while (i >= 0 && jobs[i].endTime > jobs[index].startTime) i--;
    return i;
  };

  const dfs = (n = N) => {
    if (n === 0) return 0;

    const job = jobs[n - 1];

    const nextJobIndex = getNextJobIndex(n - 1);

    // If we include this job
    const includedProfit = job.profit + dfs(nextJobIndex + 1);

    // If we dont include this job
    const notincludedProfit = dfs(n - 1);

    return Math.max(includedProfit, notincludedProfit);
  };

  return dfs();
}

// Recursion with binary search
export function jobSchedulingV2(startTime, endTime, profit) {
  const N = startTime.length;
  const jobs = new Array(N);

  // create jobs
  for (let i = 0; i < N; i++) {
    jobs[i] = {
      startTime: startTime[i],
      endTime: endTime[i],
      profit: profit[i],
    };
  }

  jobs.sort((a, b) => a.endTime - b.endTime);

  const getNextJobIndex = (index) => {
    let left = 0;
    let right = index - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (jobs[mid].endTime > jobs[index].startTime) {
        right = mid - 1;
      } else {
        if (jobs[mid + 1] && jobs[mid + 1].endTime <= jobs[index].startTime) {
          left = mid + 1;
        } else {
          return mid;
        }
      }
    }

    return -1;
  };

  const dfs = (n = N) => {
    if (n === 0) return 0;

    const job = jobs[n - 1];

    const nextJobIndex = getNextJobIndex(n - 1);

    // If we include this job
    const includedProfit = job.profit + dfs(nextJobIndex + 1);

    // If we dont include this job
    const notincludedProfit = dfs(n - 1);

    return Math.max(includedProfit, notincludedProfit);
  };

  return dfs();
}

// Recursion with memorisation and binary search
export function jobSchedulingV3(startTime, endTime, profit) {
  const N = startTime.length;
  const jobs = new Array(N);

  // create jobs
  for (let i = 0; i < N; i++) {
    jobs[i] = {
      startTime: startTime[i],
      endTime: endTime[i],
      profit: profit[i],
    };
  }

  jobs.sort((a, b) => a.endTime - b.endTime);

  const getNextJobIndex = (index) => {
    let left = 0;
    let right = index - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (jobs[mid].endTime > jobs[index].startTime) right = mid - 1;
      else {
        if (jobs[mid + 1] && jobs[mid + 1].endTime <= jobs[index].startTime)
          left = mid + 1;
        else return mid;
      }
    }
    return -1;
  };

  const cache = new Array(N + 1).fill(-1);

  const dfs = (n = N) => {
    if (n === 0) return 0;

    if (cache[n] !== -1) return cache[n];

    const job = jobs[n - 1];

    const nextJobIndex = getNextJobIndex(n - 1);

    // If we include this job
    const includedProfit = job.profit + dfs(nextJobIndex + 1);

    // If we dont include this job
    const notincludedProfit = dfs(n - 1);

    const maxProfit = Math.max(includedProfit, notincludedProfit);

    cache[n] = maxProfit;

    return maxProfit;
  };

  return dfs();
}

// DP
export function jobSchedulingV4(startTime, endTime, profit) {
  const N = startTime.length;
  const jobs = new Array(N);

  // create jobs
  for (let i = 0; i < N; i++) {
    jobs[i] = {
      startTime: startTime[i],
      endTime: endTime[i],
      profit: profit[i],
    };
  }

  jobs.sort((a, b) => a.endTime - b.endTime);

  const getNextJobIndex = (index) => {
    let left = 0;
    let right = index - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (jobs[mid].endTime > jobs[index].startTime) right = mid - 1;
      else {
        if (jobs[mid + 1] && jobs[mid + 1].endTime <= jobs[index].startTime)
          left = mid + 1;
        else return mid;
      }
    }
    return -1;
  };

  const table = new Array(N + 1);

  for (let n = 0; n < table.length; n++) {
    if (n === 0) table[n] = 0;
    else {
      const job = jobs[n - 1];
      const nextJobIndex = getNextJobIndex(n - 1);
      const includedProfit = job.profit + table[nextJobIndex + 1];
      const notincludedProfit = table[n - 1];
      const maxProfit = Math.max(includedProfit, notincludedProfit);
      table[n] = maxProfit;
    }
  }

  return table[N];
}

export function jobScheduling(startTimes, endTimes, profits) {
  const N = startTimes.length;

  const jobs = new Array(N)
    .fill(0)
    .map((_, i) => ({
      start: startTimes[i],
      end: endTimes[i],
      profit: profits[i],
    }))
    .sort((a, b) => a.end - b.end);

  const getNextJobIndex = (index) => {
    const start = jobs[index].start;
    let i = index - 1;
    while (i >= 0 && jobs[i].end > start) i--;
    return i;
  };

  const maxProfit = (n) => {
    if (n == 0) return 0;
    const job = jobs[n - 1];
    const nextJobIndex = getNextJobIndex(n - 1);

    const pickedProfit = job.profit + maxProfit(nextJobIndex + 1);
    const notPickedProfit = maxProfit(n - 1);
    return Math.max(pickedProfit, notPickedProfit);
  };

  return maxProfit(N);
}
