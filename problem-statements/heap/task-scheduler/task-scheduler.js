import { PriorityQueue } from "../../../data-structures/heap/heap";
import { displayHeap } from "../../../helpers/heap-helpers";

export function leastIntervalV1(tasks, n) {
  const countMap = {};
  for (const task of tasks) {
    countMap[task] = countMap[task] ? countMap[task] + 1 : 1;
  }

  const pq = new PriorityQueue({
    compare: (task1, task2) => task2.priority - task1.priority,
  });

  for (const task in countMap) {
    pq.enqueue({ task, priority: countMap[task] });
  }

  let result = 0;

  // process all the tasks
  while (!pq.isEmpty()) {
    let interval = n + 1;
    const processedTasks = [];

    while (interval > 0 && !pq.isEmpty()) {
      const { task } = pq.dequeue();
      countMap[task] -= 1;
      processedTasks.push(task);
      interval--;
      result++;
    }

    for (const task of processedTasks) {
      if (countMap[task] > 0) {
        pq.enqueue({ task, priority: countMap[task] });
      }
    }

    if (pq.isEmpty()) break;

    result += interval;
  }

  return result;
}

export function leastInterval(tasks, n) {
  if (n === 0) return tasks.length;

  // build the count map of tasks
  const countMap = {};
  for (const task of tasks) {
    countMap[task] = countMap[task] ? countMap[task] + 1 : 1;
  }

  // build the priority queue
  const pq = new PriorityQueue({
    compare: (task1, task2) => task2.priority - task1.priority,
  });
  for (const task in countMap) {
    pq.enqueue({ task, priority: countMap[task] });
  }

  //final result
  let totalIntervals = 0;

  // process all the tasks
  while (!pq.isEmpty()) {
    let interval = n + 1;
    const processedTasks = [];
    while (interval > 0 && !pq.isEmpty()) {
      const { task } = pq.dequeue();
      processedTasks.push(task);
      countMap[task] -= 1;
      interval--;
      totalIntervals++;
    }

    // Now add the processed task back to queue immediately
    // if they are still left
    for (const task of processedTasks) {
      if (countMap[task] > 0) pq.enqueue({ task, priority: countMap[task] });
    }

    // if we dont have any more tasks return result
    if (pq.isEmpty()) return totalIntervals;

    // add the gaps if any
    totalIntervals += interval;
  }

  return totalIntervals;
}
