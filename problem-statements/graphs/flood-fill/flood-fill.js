import { Queue } from "../../../data-structures/queue/queue";

export function floodFillV1(image, sr, sc, color) {
  const R = image.length;
  const C = image[0].length;

  const originalColor = image[sr][sc];
  const queue = new Queue();
  queue.enqueue({ r: sr, c: sc });

  // inserting to queue
  const addToQueue = (r, c) => {
    if (
      r < 0 ||
      r >= R ||
      c < 0 ||
      c >= C ||
      image[r][c] !== originalColor ||
      image[r][c] === color
    ) {
      return;
    }

    queue.enqueue({ r, c });
  };

  // processing the queue
  while (!queue.isEmpty()) {
    const { r, c } = queue.dequeue();
    addToQueue(r + 1, c);
    addToQueue(r - 1, c);
    addToQueue(r, c + 1);
    addToQueue(r, c - 1);
    image[r][c] = color;
  }

  return image;
}

export function floodFillV2(image, sr, sc, color) {
  const R = image.length;
  const C = image[0].length;

  const originalColor = image[sr][sc];

  const fill = (r, c) => {
    if (
      r < 0 ||
      c < 0 ||
      r >= R ||
      c >= C ||
      image[r][c] !== originalColor ||
      image[r][c] === color
    ) {
      return;
    }

    image[r][c] = color;
    fill(r + 1, c);
    fill(r - 1, c);
    fill(r, c + 1);
    fill(r, c - 1);
  };

  fill(sr, sc);

  return image;
}

export function floodFill(image, sr, sc, color) {
  const R = image.length;
  const C = image[0].length;

  const fill = (r, c) => {
    if (
      r < 0 ||
      c < 0 ||
      r === R ||
      c === C ||
      image[r][c] === 0 ||
      image[r][c] === color
    )
      return;
    image[r][c] = color;
    fill(r + 1, c);
    fill(r, c + 1);
    fill(r - 1, c);
    fill(r, c - 1);
  };

  fill(sr, sc);

  return image;
}
