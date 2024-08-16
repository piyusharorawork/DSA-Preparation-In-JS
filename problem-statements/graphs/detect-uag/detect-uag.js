export function detectAcyclic(graph) {
  // current node ==> node which is being processed
  // parent ==> the node from which current node came from
  // visited ==> set to track if we have already visited a node or not
  function hasCycle(currentNode = graph, parent = null, visited = new Set()) {
    visited.add(currentNode);

    for (const neighbor of currentNode.neighbors) {
      // If neighbor is not visited
      // It means we have not expored the path yet
      // Continue the traversel
      if (!visited.has(neighbor)) {
        const isCycleFound = hasCycle(neighbor, currentNode, visited);

        // if we found the cycle , return true
        if (isCycleFound) return true;
      }

      // Now the neighbor is already visited
      // It must be the parent otherwise it is a cycle
      else if (neighbor !== parent) return true;
    }

    return false;
  }

  const cycle = hasCycle();

  return !cycle;
}
