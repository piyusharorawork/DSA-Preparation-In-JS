class Queue {
  elements = [];

  enqueue(item) {
    this.elements.push(item);
  }

  dequeue() {
    return this.elements.shift();
  }

  peek() {
    return this.elements[0];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.elements.length;
  }
}

const buildGraph = (edges) => {
  const graph = {};
  for (const [from, to] of edges) {
    if (!graph[from]) graph[from] = [];
    graph[from].push(to);
  }
  return graph;
};

const traverseBFS = (graph, source) => {
  const visited = new Set();
  const nodes = [];
  const queue = new Queue();
  queue.enqueue(source);

  while (!queue.isEmpty()) {
    const node = queue.dequeue();
    nodes.push(node);
    const neighbors = graph[node];
    if (!neighbors) continue;

    for (const neighbor of neighbors) {
      queue.enqueue(neighbor);
    }
  }

  return nodes;
};

(() => {
  const scenerios = [
    {
      edges: [
        [0, 1],
        [0, 2],
        [0, 3],
        [2, 4],
      ],
      source: 0,
    },
    {
      edges: [
        [0, 1],
        [0, 2],
      ],
      source: 0,
    },
  ];

  for (const scenerio of scenerios) {
    const graph = buildGraph(scenerio.edges);
    const nodes = traverseBFS(graph, scenerio.source);
    console.log(nodes);
  }
})();
