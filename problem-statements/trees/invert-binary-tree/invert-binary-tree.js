export function invertTreeV1(root) {
  if (root === null) {
    return null;
  }

  const rootCopy = root;

  const temp = root.left;
  root.left = root.right;
  root.right = temp;

  invertTree(root.left);
  invertTree(root.right);

  return rootCopy;
}

export function invertTree(root) {
  const invert = (node) => {
    if (node) {
      [node.left, node.right] = [node.right, node.left];
      invert(node.left);
      invert(node.right);
    }
    return node;
  };

  return invert(root);
}
