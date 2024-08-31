import { TreeNode } from "../../../data-structures/binary-tree/binary-tree";

export function serialize(root) {
  if (root === null) return "";

  let data = "";
  const helper = (node = root) => {
    if (node === null) data += "#,";
    else {
      data += `${node.val},`;
      helper(node.left);
      helper(node.right);
    }
  };

  helper();
  return data;
}

export function deserialize(data) {
  if (data === "") return null;

  const values = data.split(",");
  let i = 0;

  const helper = () => {
    const val = values[i];
    i++;
    if (val === "#") return null;

    const node = new TreeNode(parseInt(val));
    node.left = helper();
    node.right = helper();
    return node;
  };

  const root = helper();
  return root;
}
