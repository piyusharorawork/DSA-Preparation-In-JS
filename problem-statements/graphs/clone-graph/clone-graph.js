import { Node } from "../unidirectional-graph-from-array/unidirectional-graph-from-array";

export function cloneGraph(node) {
  const nodeMap = {}; // Map of all the values to cloned nodes

  const clone = (node) => {
    if (node === null) return null;

    // If the node already exists in the map , it means already processed
    if (nodeMap[node.val]) return nodeMap[node.val];

    const clonedNode = new Node(node.val);
    nodeMap[node.val] = clonedNode;

    for (const neighbor of node.neighbors) {
      const clonedNeighbor = clone(neighbor);
      clonedNode.neighbors.push(clonedNeighbor);
    }

    return clonedNode;
  };

  return clone(node);
}
