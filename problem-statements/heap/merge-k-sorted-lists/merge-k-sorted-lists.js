import { PriorityQueue } from "../../../data-structures/heap/heap";
import { ListNode } from "../../../data-structures/linked-list/linked-list";
import { displayHeap } from "../../../helpers/heap-helpers";

export function mergeKLists(lists) {
  const N = lists.length;
  if (N === 0) return null;

  const pq = new PriorityQueue({ compare: (a, b) => a.priority - b.priority });

  for (let list of lists) {
    while (list !== null) {
      pq.enqueue({ val: list.val, priority: list.val });
      list = list.next;
    }
  }

  if (pq.isEmpty()) return null;
  const headValue = pq.dequeue().val;
  const head = new ListNode(headValue);

  let current = head;
  while (!pq.isEmpty()) {
    const nodeVal = pq.dequeue().val;
    const node = new ListNode(nodeVal);
    current.next = node;
    current = node;
  }

  return head;
}
