export function detectDagV1(graph) {
  function hasCycle(node, visited = new Set(), path = new Set()) {
    // If we visit the same node in our recursion path , then we have a cycle
    if (path.has(node)) return true;

    // If we visit the already visited node but it is not in recursion path , then we can ignore that node and it is not cycle
    if (visited.has(node)) return false;

    path.add(node);
    visited.add(node);

    for (const neighbor of node.neighbors) {
      const isCycleFound = hasCycle(neighbor, visited, path);
      if (isCycleFound) return true;
    }

    path.delete(node);

    return false;
  }

  for (const node of graph) {
    const isCycleFound = hasCycle(node);
    if (isCycleFound) return false;
  }

  return true;
}

// With memorisation
export function detectDag(graph) {
  const visited = new Set();
  const path = new Set();

  function hasCycle(node) {
    // If we visit the same node in our recursion path , then we have a cycle
    if (path.has(node)) return true;

    // If we visit the already visited node but it is not in recursion path , then we can ignore that node and it is not cycle
    if (visited.has(node)) return false;

    path.add(node);
    visited.add(node);

    for (const neighbor of node.neighbors) {
      const isCycleFound = hasCycle(neighbor);
      if (isCycleFound) return true;
    }

    path.delete(node);

    return false;
  }

  for (const node of graph) {
    const isCycleFound = hasCycle(node);
    if (isCycleFound) return false;
  }

  return true;
}
