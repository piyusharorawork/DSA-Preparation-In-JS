import { PriorityQueue } from "../../../data-structures/heap/heap";

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

  const distance = (index) => {
    const point = points[index];
    const [x, y] = point;
    return Math.pow(x, 2) + Math.pow(y, 2);
  };

  const pq = new PriorityQueue();
  for (let i = 0; i < N; i++) {
    pq.insert(points[i], distance(i) * -1);
  }

  const result = [];
  for (let i = 0; i < k; i++) {
    const point = pq.remove().data;
    result.push(point);
  }

  return result;
}

// Using Priority Queue for only k points
export function kClosest(points, k) {
  const N = points.length;

  const distance = (index) => {
    const point = points[index];
    return pointDistance(point);
  };

  const pointDistance = (point) => {
    const [x, y] = point;
    return Math.pow(x, 2) + Math.pow(y, 2);
  };

  const pq = new PriorityQueue();
  for (let i = 0; i < N; i++) {
    if (i < k) {
      pq.insert(points[i], distance(i));
    } else {
      const maxPoint = pq.peek();
      const maxDistance = pointDistance(maxPoint);
      const currentDistance = pointDistance(points[i]);
      if (maxDistance > currentDistance) {
        pq.remove();
        pq.insert(points[i], distance(i));
      }
    }
  }

  const result = new Array(k);
  for (let i = k - 1; i >= 0; i--) {
    const point = pq.remove();
    result[i] = point;
  }

  return result;
}
