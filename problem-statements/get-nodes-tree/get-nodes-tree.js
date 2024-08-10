export function getNodesTree(root) {
  let count = 0;
  const helper = (node = root) => {
    count++;
    if (node.left) {
      helper(node.left);
    }
    if (node.right) {
      helper(node.right);
    }
  };

  if (root === null) {
    return 0;
  }

  helper();
  return count;
}
