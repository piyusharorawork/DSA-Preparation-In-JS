export class Node {
  constructor(val, neighbors) {
    this.val = val === undefined ? 0 : val;
    this.neighbors = neighbors === undefined ? [] : neighbors;
  }
}

export function createUnidirectionalGraph(adjacencyArray) {
  const N = adjacencyArray.length; // Number of nodes
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

export function getArrayFromUnidirectionalGraph(node) {
  const adjacencyArray = [];
  const visited = new Set();

  const traverse = (currentNode) => {
    if (visited.has(currentNode.val)) return;
    visited.add(currentNode.val);

    // Check if the adjacency array has enough size for current node
    while (adjacencyArray.length < currentNode.val) {
      adjacencyArray.push([]);
    }

    adjacencyArray[currentNode.val - 1] = currentNode.neighbors.map(
      (neighbor) => {
        return neighbor.val;
      }
    );

    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor.val)) {
        traverse(neighbor);
      }
    }
  };

  traverse(node);

  return adjacencyArray;
}
