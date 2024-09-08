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

  // Create the node objects
  for (let i = 0; i < N; i++) {
    const node = new Node(i + 1); // Assuming 1-based indexing
    nodes[i] = node;
  }

  // Connect the nodes according to the adjacency array
  for (let i = 0; i < N; i++) {
    const node = nodes[i];

    for (let j = 0; j < adjacencyArray[i].length; j++) {
      const neighborVal = adjacencyArray[i][j];
      const neighborNode = nodes[neighborVal - 1]; // Assuming 1-based indexing
      node.neighbors.push(neighborNode);
    }
  }

  return nodes; // Return all nodes for better access
}

export class UnionFind {
  constructor() {
    this.parentMap = {};
  }

  find(value) {
    // if parent does not have the value
    // make itself its parent
    if (!this.parentMap[value]) {
      this.parentMap[value] = value;
      return value;
    }

    // if parent has the value and it is itself
    // just return
    if (this.parentMap[value] === value) return value;

    // if the parent is not same as value
    // find the parent and compress the path
    this.parentMap[value] = this.find(this.parentMap[value]);
    return this.parentMap[value];
  }

  union(valueA, valueB) {
    const parentA = this.find(valueA);
    const parentB = this.find(valueB);

    // if both values belong to same parent
    // it is a cycle
    if (parentA === parentB) return true;

    // Now we have different parents for A and B
    // perform union
    this.parentMap[parentB] = parentA;
    return false;
  }
}
