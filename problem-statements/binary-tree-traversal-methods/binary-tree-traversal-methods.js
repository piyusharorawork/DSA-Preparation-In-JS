export function preOrderTraversal(root, list = []) {
  list.push(root.val);
  if (root.left) {
    preOrderTraversal(root.left, list);
  }

  if (root.right) {
    preOrderTraversal(root.right, list);
  }

  return list;
}

export function postOrderTraversal(root, list = []) {
  if (root.left) {
    postOrderTraversal(root.left, list);
  }

  if (root.right) {
    postOrderTraversal(root.right, list);
  }

  list.push(root.val);
  return list;
}

export function inOrderTraversal(root, list = []) {
  if (root.left) {
    inOrderTraversal(root.left, list);
  }

  list.push(root.val);

  if (root.right) {
    inOrderTraversal(root.right, list);
  }

  return list;
}
