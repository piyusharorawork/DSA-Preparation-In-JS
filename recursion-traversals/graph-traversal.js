import { createGraph } from "../data-structures/graph";

function displayAllNodes(node, visited = []) {
  if (visited[node.val - 1]) return; // Termination

  console.log(node.val); // Operation
  visited[node.val - 1] = true;

  for (const neighbor of node.neighbors) {
    displayAllNodes(neighbor, visited);
  }
}

displayAllNodes(
  createGraph([
    [2, 4],
    [1, 3],
    [2, 4],
    [3, 1],
  ])
);
