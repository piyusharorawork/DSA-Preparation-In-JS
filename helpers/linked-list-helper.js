export function convertLinkedListToArray(head) {
  if (head === null) {
    return [];
  }

  const result = [];

  let curr = head;
  while (curr !== null) {
    result.push(curr.val);
    curr = curr.next;
  }
  return result;
}
