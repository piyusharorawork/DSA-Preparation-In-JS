export function isPerfectBinaryTree(root) {
  const count = (node = root) => {
    if (node === null) {
      return 0;
    }

    return 1 + count(node.left) + count(node.right);
  };

  const height = (node = root) => {
    if (node === null) {
      return 0;
    }

    return 1 + Math.max(height(node.left), height(node.right));
  };

  if (root === null) {
    return true;
  }

  const h = height();
  const c = count();

  const expectedNodes = Math.pow(2, h) - 1;
  return expectedNodes === c;
}
