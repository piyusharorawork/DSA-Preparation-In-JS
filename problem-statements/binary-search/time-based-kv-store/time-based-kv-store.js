export class TimeMap {
  constructor() {
    // stores key : array of timestamps
    this.mapArray = {};

    // stores key : timestamp value
    this.mapValue = {};
  }
  set(key, value, timestamp) {
    // if key does not exist
    if (!this.mapArray[key]) {
      this.mapArray[key] = [];
      this.mapValue[key] = {};
    }

    this.mapArray[key].push(timestamp);
    this.mapValue[key][timestamp] = value;
  }

  get(key, timestamp) {
    if (!this.mapArray[key]) {
      return "";
    }

    if (this.mapValue[key][timestamp]) {
      return this.mapValue[key][timestamp];
    }

    const timestamps = this.mapArray[key];
    const N = timestamps.length;

    let left = 0;
    let right = N - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (timestamps[mid] < timestamp) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    const t = timestamps[right];

    if (!t) {
      return "";
    }
    return this.mapValue[key][t];
  }
}
