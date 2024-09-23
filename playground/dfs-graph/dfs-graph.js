const buildGraph = (edges) => {
  const graph = {};
  for (const [from, to] of edges) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }
  return graph;
};

const traverseDFS = (graph, source) => {
  const visited = new Set();
  const nodes = [];

  const dfs = (node) => {
    if (visited.has(node)) return;
    visited.add(node);
    nodes.push(node);

    const neighbors = graph[node];
    if (!neighbors) return;
    for (const neighbor of neighbors) {
      dfs(neighbor);
    }
  };

  dfs(source);
  return nodes;
};

(() => {
  const scenerios = [
    {
      edges: [
        [1, 2],
        [1, 0],
        [0, 2],
        [2, 3],
        [2, 4],
      ],
      source: 1,
    },
    {
      edges: [
        [0, 2],
        [0, 3],
        [0, 1],
        [2, 4],
      ],
      source: 0,
    },
    {
      edges: [
        [1, 2],
        [1, 0],
        [2, 0],
        [2, 3],
        [4, 2],
      ],
      source: 1,
    },
    {
      edges: [
        [0, 2],
        [0, 3],
        [2, 4],
        [1, 0],
      ],
      source: 2,
    },
  ];

  for (const scenerio of scenerios) {
    const graph = buildGraph(scenerio.edges);
    const nodes = traverseDFS(graph, scenerio.source);
    console.log(nodes);
  }
})();
