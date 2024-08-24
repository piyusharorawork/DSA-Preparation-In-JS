import { Node } from "../../../data-structures/graph/graph";

export function cloneGraph(node) {
  const clonedNodes = [];

  const clone = (node) => {
    if (node === null) return null;

    // If the node already exists in the map , it means already processed
    if (clonedNodes[node.val - 1]) return clonedNodes[node.val - 1];

    const clonedNode = new Node(node.val);
    clonedNodes[node.val - 1] = clonedNode;

    for (const neighbor of node.neighbors) {
      const clonedNeighbor = clone(neighbor);
      clonedNode.neighbors.push(clonedNeighbor);
    }

    return clonedNode;
  };

  return clone(node);
}
