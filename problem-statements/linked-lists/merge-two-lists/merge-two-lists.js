import { ListNode } from "../linked-list/linked-list";

export function mergeTwoListsV1(list1, list2) {
  if (list1 === null && list2 === null) {
    return null;
  }

  if (list1 === null) {
    return list2;
  }

  if (list2 === null) {
    return list1;
  }

  const newHead = new ListNode();
  if (list1.val <= list2.val) {
    newHead.next = list1;
    list1 = list1.next;
  } else {
    newHead.next = list2;
    list2 = list2.next;
  }

  let curr = newHead.next;

  while (list1 !== null && list2 !== null) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }

  if (list1 === null) {
    curr.next = list2;
  }

  if (list2 === null) {
    curr.next = list1;
  }

  return newHead.next;
}

export function mergeTwoLists(list1, list2) {
  if (list1 === null && list2 === null) {
    return null;
  }

  if (list2 === null) {
    return list1;
  }

  if (list1 === null) {
    return list2;
  }

  const newHead = new ListNode();
  if (list1.val <= list2.val) {
    newHead.next = list1;
    list1.next = mergeTwoLists(list1.next, list2);
  } else {
    newHead.next = list2;
    list2.next = mergeTwoLists(list1, list2.next);
  }

  return newHead.next;
}
