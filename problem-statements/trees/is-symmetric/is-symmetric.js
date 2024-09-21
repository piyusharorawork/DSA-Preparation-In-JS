export function isSymmetricV1(root) {
  if (root === true) {
    return true;
  }

  const stack = [root.left, root.right];

  while (stack.length > 0) {
    const left = stack.pop();
    const right = stack.pop();

    if (!left && !right) {
      continue;
    }

    if (left && !right) {
      return false;
    }

    if (!left && right) {
      return false;
    }

    if (left.val !== right.val) {
      return false;
    }

    stack.push(left.left);
    stack.push(right.right);

    stack.push(left.right);
    stack.push(right.left);
  }

  return true;
}

export function isSymmetric(root) {
  const check = (left, right) => {
    if (left === null && right === null) return true;
    if (left === null && right !== null) return false;
    if (right === null && left !== null) return false;

    return check(left.left, right.right) && check(left.right, right.left);
  };

  return check(root.left, root.right);
}
