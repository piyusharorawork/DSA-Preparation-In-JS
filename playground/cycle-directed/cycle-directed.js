class UF {
  constructor() {
    this.parentMap = {};
  }

  find(value) {
    // if parent does not have the value
    // make itself its parent
    let parent = this.parentMap[value];
    if (!parent) {
      parent = value;
      return parent;
    }

    // if parent has the value and it is itself
    // just return
    if (parent === value) return parent;

    // if the parent is not same as value
    // find the parent and compress the path
    parent = this.find(parent);
    return parent;
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

const buildGraphFromAdj = (adj) => {
  const graph = {};
  for (let i = 0; i < adj.length; i++) {
    if (!graph[i]) graph[i] = [];
    graph[i].push(...adj[i]);
  }
  return graph;
};

const hasCycle = (graph) => {
  const uf = new UF();
  const visited = new Set();
  const nodeMap = new Map(); // Mapping nodes to unique integers
  let id = 0;

  for (const node in graph) {
    if (!nodeMap.has(node)) nodeMap.set(node, id++);
    if (visited.has(node)) continue;
    visited.add(node);

    const neighbors = graph[node];
    if (!neighbors) continue;

    for (const neighbor of neighbors) {
      if (!nodeMap.has(neighbor)) nodeMap.set(neighbor, id++);

      const nodeId = nodeMap.get(node);
      const neighborId = nodeMap.get(neighbor);

      const isFound = uf.union(nodeId, neighborId);
      if (isFound) return true; // Cycle detected
    }
  }

  return false;
};

(() => {
  const scenerios = [
    {
      adj: [[1], [0, 2, 4], [1, 3], [2, 4], [1, 3]],
    },
    {
      adj: [[], [2], [1, 3], [2]],
    },
  ];

  for (const scenerio of scenerios) {
    const graph = buildGraphFromAdj(scenerio.adj);
    const res = hasCycle(graph);
    console.log(res);
  }
})();
