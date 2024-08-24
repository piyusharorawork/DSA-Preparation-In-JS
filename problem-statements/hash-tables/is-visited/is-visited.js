export function isVisited(array, element) {
  const visitedMap = {};

  for (const element of array) {
    if (!visitedMap[element]) {
      visitedMap[element] = true;
    }
  }

  return visitedMap[element] === true;
}
