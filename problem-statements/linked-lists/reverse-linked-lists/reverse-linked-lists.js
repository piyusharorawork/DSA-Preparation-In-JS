export function reverseListV1(head) {
  if (head === null || head.next === null) return head;

  let left = head;
  let right = left.next;

  while (right !== null) {
    const temp = right.next;
    right.next = left;
    left = right;
    right = temp;
  }

  head.next = null;
  return left;
}

export function reverseList(head) {
  if (head === null || head.next === null) return head;

  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
}
