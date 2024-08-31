// Using recursion with global
export function kthSmallestV1(root, k) {
  const inOrder = [];
  const helper = (node = root) => {
    if (node.left) helper(node.left);
    inOrder.push(node.val);
    if (node.right) helper(node.right);
  };

  helper();

  return inOrder[k - 1];
}

export function kthSmallest(root, k) {
  let count = 0;
  let result = null;
  const helper = (node = root) => {
    if (node === null) return;

    if (result !== null) return;

    helper(node.left);
    count++;
    if (count === k) {
      result = node.val;
      return;
    }
    helper(node.right);
  };

  helper();
  return result;
}
