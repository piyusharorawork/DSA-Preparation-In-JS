export function middleNodeV1(head) {
  const getLength = (node = head, count = 0) => {
    if (node === null) return count;
    return getLength(node.next, count + 1);
  };

  const length = getLength();
  const end = Math.floor(length / 2);

  for (let i = 0; i < end; i++) {
    head = head.next;
  }

  return head;
}

export function middleNode(head) {
  if (head === null || head.next === null) return head;

  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}
