export function convertGraphToArray(node) {
  if (node === null) {
    return [];
  }

  const adjacencyArray = [];
  const visited = new Set();

  const traverse = (node) => {
    if (visited.has(node.val)) return;
    visited.add(node.val);

    adjacencyArray[node.val - 1] = [];

    for (const neighbor of node.neighbors) {
      adjacencyArray[node.val - 1].push(neighbor.val);
      traverse(neighbor);
    }
  };

  traverse(node);

  return adjacencyArray;
}
