export class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

export function createDirectedGraph(adjacencyList) {
  const N = adjacencyList.length;

  if (N === 0) return null;

  const nodes = new Array(N);

  // Since we dont know the order we will fill the nodes list
  // This will be used in future to get the node from val
  for (let i = 0; i < N; i++) {
    const node = new Node(i + 1);
    nodes[i] = node;
  }

  // Now that we have all the nodes , we will start updatin
  // their neighbors
  for (let i = 0; i < N; i++) {
    const node = nodes[i];
    for (let j = 0; j < adjacencyList[i].length; j++) {
      const neighborVal = adjacencyList[i][j];
      const neighborNode = nodes[neighborVal - 1];
      if (!node.neighbors.includes(neighborNode)) {
        node.neighbors.push(neighborNode);
      }
    }
  }

  const firstNode = nodes[0];
  return firstNode;
}

export function getArrayFromDirectedGraph(node) {
  if (node === null) return [];

  const adjacencyList = [];
  const visited = new Set();

  const traverse = (node) => {
    if (visited.has(node)) return;
    visited.add(node);

    adjacencyList[node.val - 1] = [];

    for (const neighbor of node.neighbors) {
      adjacencyList[node.val - 1].push(neighbor.val);
      traverse(neighbor);
    }
  };

  traverse(node);

  return adjacencyList;
}
