// export function lowestCommonAncestor(root, p, q) {
//   if (p === null || q === null || root === null) {
//     return null;
//   }

//   const maxNode = Math.max(p.val, q.val);
//   const minNode = Math.min(p.val, q.val);

//   if (root.val > maxNode) {
//     return lowestCommonAncestor(root.left, p, q);
//   }

//   if (root.val < minNode) {
//     return lowestCommonAncestor(root.right, p, q);
//   }

//   return root;
// }

export function lowestCommonAncestor(root, p, q) {
  const maxNode = Math.max(p.val, q.val);
  const minNode = Math.min(p.val, q.val);

  const helper = (node = root) => {
    if (node === null) {
      return null;
    }

    // search in left
    if (node.val > maxNode) {
      return helper(node.left);
    }

    // search in right
    if (node.val < minNode) {
      return helper(node.right);
    }

    return node;
  };

  return helper();
}
