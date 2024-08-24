export class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export function createLinkedList(array) {
  if (array.length === 0) {
    return null;
  }

  const N = array.length;
  const head = new ListNode(array[0]);
  let curr = head;

  for (let i = 1; i < N; i++) {
    const element = array[i];
    const node = new ListNode(element);
    curr.next = node;
    curr = curr.next;
  }

  return head;
}
