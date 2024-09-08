export function convertGraphNodeToArray(node) {
  if (node === null) return [];

  const result = [];
  const visited = new Set();

  const dfs = (node) => {
    if (visited.has(node.val)) return;

    visited.add(node.val);

    result[node.val - 1] = [];
    for (const neighbor of node.neighbors) {
      result[node.val - 1].push(neighbor.val);
      dfs(neighbor);
    }
  };

  dfs(node);
  return result;
}

export function convertGraphToArray(nodes) {
  if (nodes.length === 0) return [];

  const N = nodes.length;
  const nodesList = [];

  for (const node of nodes) {
    const neighbors = [];
    for (const neighbor of node.neighbors) {
      neighbors.push(neighbor.val);
    }
    nodesList.push(neighbors);
  }

  return nodesList;
}
