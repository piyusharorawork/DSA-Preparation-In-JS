export function isValidBSTV1(root) {
  const helper = (node = root, min = -Infinity, max = Infinity) => {
    if (node === null) return true;

    if (node.val <= min || node.val >= max) return false;

    return (
      helper(node.left, min, node.val) && helper(node.right, node.val, max)
    );
  };

  return helper();
}

export function isValidBSTV2(root) {
  const map = {};

  const helper = (node = root, min = -Infinity, max = Infinity) => {
    if (node === null) return true;

    if (node.val <= min || node.val >= max) return false;

    const key = `${node.val}#${min}#${max}`;
    if (map[key]) return map[key];

    const valid =
      helper(node.left, min, node.val) && helper(node.right, node.val, max);

    map[key] = valid;

    return valid;
  };

  return helper();
}

export function isValidBST(root) {
  const map = {};

  const helper = (node = root, min = -Infinity, max = Infinity) => {
    if (node === null) return true;

    if (node.val <= min || node.val >= max) return false;

    const key = `${node.val}#${min}#${max}`;
    if (map[key]) return map[key];

    const isValid =
      helper(node.left, min, node.val) && helper(node.right, node.val, max);
    map[key] = isValid;
    return isValid;
  };

  return helper();
}
