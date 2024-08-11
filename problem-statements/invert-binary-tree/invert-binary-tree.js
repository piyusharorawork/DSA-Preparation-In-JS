export function invertTree(root) {
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
