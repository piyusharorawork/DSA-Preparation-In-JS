export class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

export function createGraph(adjacencyArray) {
  const N = adjacencyArray.length; // Number of nodes

  if (N === 0) {
    return null;
  }

  const nodes = new Array(N);

  for (let i = 0; i < N; i++) {
    const node = new Node(i + 1);
    nodes[i] = node;
  }

  for (let i = 0; i < N; i++) {
    const node = nodes[i];

    for (let j = 0; j < adjacencyArray[i].length; j++) {
      const neighborVal = adjacencyArray[i][j];
      const neighborNode = nodes[neighborVal - 1];
      if (!node.neighbors.includes(neighborNode)) {
        node.neighbors.push(neighborNode);
      }
    }
  }

  return nodes[0]; // Return the first node
}

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
