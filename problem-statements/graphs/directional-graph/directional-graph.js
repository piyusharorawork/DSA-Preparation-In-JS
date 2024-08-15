export class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

export function createDirectedGraph(adjacency) {
  const N = adjacency.length;

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

    for (let j = 0; j < adjacency[i].length; j++) {
      const neighborVal = adjacency[i][j];
      const neighborNode = nodes[neighborVal - 1];
      if (!node.neighbors.includes(neighborNode)) {
        node.neighbors.push(neighborNode);
      }
    }
  }

  const startNode = nodes[0];

  return startNode;
}

export function getArrayFromDirectedGraph(node) {
  if (node === null) {
    return [];
  }
  const adjacenctList = [];
  const visited = new Set();

  const traverse = (node) => {
    if (visited.has(node.val)) return;
    visited.add(node.val);

    adjacenctList[node.val - 1] = [];

    for (const neighbor of node.neighbors) {
      adjacenctList[node.val - 1].push(neighbor.val);
      traverse(neighbor);
    }
  };

  traverse(node);

  return adjacenctList;
}
