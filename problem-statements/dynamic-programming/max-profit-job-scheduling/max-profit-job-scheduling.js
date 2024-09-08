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

  // preprocess inputs to jobs
  const jobs = [];
  for (let i = 0; i < N; i++) {
    const job = {
      start: startTimes[i],
      end: endTimes[i],
      profit: profits[i],
    };
    jobs.push(job);
  }

  // sort the jobs in ascending
  // based on their end time
  jobs.sort((a, b) => a.end - b.end);

  // helper method to get the next job
  // to the left
  const getLeftJobIndex = (index) => {
    let start = 0;
    let end = index - 1;

    while (start <= end) {
      const mid = Math.floor((start + end) / 2);
      if (jobs[mid].end > jobs[index].start) end = mid - 1;
      else {
        if (jobs[mid + 1] && jobs[mid + 1].end <= jobs[index].start)
          start = mid + 1;
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
      const leftJobIndex = getLeftJobIndex(n - 1);
      const profitIncludingCurrentJob = job.profit + table[leftJobIndex + 1];
      const profitNotIncludingCurrentJob = table[n - 1];
      const maxProfit = Math.max(
        profitIncludingCurrentJob,
        profitNotIncludingCurrentJob
      );
      table[n] = maxProfit;
    }
  }

  return table[N];
}
