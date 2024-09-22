import { PriorityQueue } from "../../../data-structures/heap/heap";
import { displayHeap } from "../../../helpers/heap-helpers";

// Using Custom Heap
export function kClosestV1(points, k) {
  const N = points.length;

  const distance = (index) => {
    const point = points[index];
    const [x, y] = point;
    return Math.pow(x, 2) + Math.pow(y, 2);
  };

  const siftDown = (index) => {
    while (true) {
      let swapIndex = null;

      const leftChildIndex = 2 * index + 1;
      if (
        leftChildIndex < points.length &&
        distance(leftChildIndex) < distance(index)
      )
        swapIndex = leftChildIndex;

      const rightChildIndex = 2 * index + 2;
      if (rightChildIndex < points.length) {
        if (
          (swapIndex === null && distance(rightChildIndex) < distance(index)) ||
          (swapIndex !== null &&
            distance(rightChildIndex) < distance(leftChildIndex))
        )
          swapIndex = rightChildIndex;
      }

      if (swapIndex === null) break;
      [points[swapIndex], points[index]] = [points[index], points[swapIndex]];
      index = swapIndex;
    }
  };

  for (let i = N - 1; i >= 0; i--) {
    siftDown(i);
  }

  const result = [];
  for (let i = 0; i < k; i++) {
    const smallest = points[0];
    const last = points.pop();

    if (points.length > 0) {
      points[0] = last;
      siftDown(0);
    }

    result.push(smallest);
  }

  return result;
}

// Using Priority Queue for entire points
export function kClosestV2(points, k) {
  const N = points.length;

  const distance = (point) => {
    const [x, y] = point;
    return Math.pow(x, 2) + Math.pow(y, 2);
  };

  // create priority queue with larger distance
  const pq = new PriorityQueue({
    compare: (point1, point2) => point2.priority - point1.priority,
  });

  for (let i = 0; i < N; i++) {
    // We need to maintain fixed k size priority queue

    // If i < k , we can just add it to
    if (i < k) pq.enqueue({ value: points[i], priority: distance(points[i]) });
    else {
      const newDist = distance(points[i]);
      const maxDist = distance(pq.front().value);

      // if new distance is smaller than max distance
      // then we should add the new point to the queue
      // but before that we need to remove the currnet max
      if (newDist < maxDist) {
        pq.dequeue();
        pq.enqueue({ value: points[i], priority: newDist });
      }
    }
  }

  // now just get the values from p and push it to result
  const result = new Array(k);
  for (let i = k - 1; i >= 0; i--) {
    const point = pq.dequeue().value;
    result[i] = point;
  }
  return result;
}

export function kClosest(points, k) {
  const distance = (point) => Math.pow(point[0], 2) + Math.pow(point[1], 2);

  const N = points.length;

  // max Heap
  const pq = new PriorityQueue({
    compare: (a, b) => b.dist - a.dist,
  });

  for (let i = 0; i < N; i++) {
    pq.enqueue({ val: points[i], dist: distance(points[i]) });

    if (pq.size() > k) pq.dequeue();
  }

  const result = [];
  while (!pq.isEmpty()) result.push(pq.dequeue().val);

  return result;
}
