import { Node } from "../../../data-structures/graph/graph";

export function canFinishV1(numCourses, prerequisites) {
  const nodes = new Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    nodes[i] = new Node(i);
  }
  const createGraph = () => {
    const N = prerequisites.length;
    for (let i = 0; i < N; i++) {
      const [from, to] = prerequisites[i];

      const fromNode = nodes[from];
      const toNode = nodes[to];
      fromNode.neighbors.push(toNode);
    }

    return nodes;
  };

  const graph = createGraph();

  const hasCycle = (node = graph, visited = new Set(), path = new Set()) => {
    if (path.has(node)) return true;
    if (visited.has(node)) return false;

    path.add(node);
    visited.add(node);

    for (const neighbor of node.neighbors) {
      const isCycleFound = hasCycle(neighbor, visited, path);
      if (isCycleFound) return true;
    }

    path.delete(node);

    return false;
  };

  for (const node of nodes) {
    const cycle = hasCycle(node);
    if (cycle) return false;
  }

  return true;
}

export function canFinish(numCourses, prerequisites) {
  const nodes = new Array(numCourses);
  for (let i = 0; i < numCourses; i++) {
    nodes[i] = new Node(i);
  }
  const createGraph = () => {
    const N = prerequisites.length;
    for (let i = 0; i < N; i++) {
      const [from, to] = prerequisites[i];

      const fromNode = nodes[from];
      const toNode = nodes[to];
      fromNode.neighbors.push(toNode);
    }

    return nodes;
  };

  const graph = createGraph();
  const visited = new Set();
  const path = new Set();

  const hasCycle = (node = graph) => {
    if (path.has(node)) return true;
    if (visited.has(node)) return false;

    path.add(node);
    visited.add(node);

    for (const neighbor of node.neighbors) {
      const isCycleFound = hasCycle(neighbor);
      if (isCycleFound) return true;
    }

    path.delete(node);

    return false;
  };

  for (const node of nodes) {
    const cycle = hasCycle(node);
    if (cycle) return false;
  }

  return true;
}
