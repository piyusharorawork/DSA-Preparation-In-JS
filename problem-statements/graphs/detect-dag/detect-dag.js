export function detectDag(graph) {
  function hasCycle(node = graph, visited = new Set(), path = new Set()) {
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

  return !hasCycle();
}
