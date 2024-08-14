export class Node {
  constructor(val, neighbours) {
    this.val = val === undefined ? 0 : val;
    this.neighbours = neighbours === undefined ? [] : neighbours;
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
      const neighbourVal = adjacencyArray[i][j];
      const neighbourNode = nodes[neighbourVal - 1];
      if (!node.neighbours.includes(neighbourNode)) {
        node.neighbours.push(neighbourNode);
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

    adjacencyArray[currentNode.val - 1] = currentNode.neighbours.map(
      (neighbour) => {
        return neighbour.val;
      }
    );

    for (const neighbour of currentNode.neighbours) {
      if (!visited.has(neighbour.val)) {
        traverse(neighbour);
      }
    }
  };

  traverse(node);

  return adjacencyArray;
}
