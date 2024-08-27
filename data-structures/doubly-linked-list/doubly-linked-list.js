export class DoublyLinkedListNode {
  constructor(val, next, prev) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
    this.prev = prev === undefined ? null : prev;
  }
}

export class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insertBeg(val) {
    const node = new DoublyLinkedListNode(val);

    // If no elements present in the list
    // both head and tail will be new node
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      // Only move the head but dont touch the tail
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
  }

  insertEnd(val) {
    const node = new DoublyLinkedListNode(val);
    if (this.head === null) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      node.prev = this.tail;
      this.tail = node;
    }
  }

  deleteBeg() {
    if (this.head === null) {
      throw "no nodes left to delete";
    }

    const curr = this.head;
    this.head = this.head.next;
    this.head.prev = null;

    return curr.val;
  }

  deleteEnd() {
    if (this.tail === null) {
      throw "no nodes left to delete";
    }
    const curr = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;

    return curr.val;
  }

  deleteNode(val) {
    // No nodes
    if (this.head === null) throw "no nodes found";

    // Only one node
    if (this.head.next === null) {
      if (this.head.val === val) {
        this.head = null;
        return;
      }
    }

    // Now there are atleast 2 nodes

    let cur = this.head.next;
    while (cur !== null) {
      if (cur.val === val) {
        cur.prev.next = cur.next;
        cur.next.prev = cur.prev;
        return;
      }
      cur = cur.next;
    }

    throw `no node with val ${val} found`;
  }

  search(val) {
    if (this.head === null) return null;

    let cur = this.head;
    while (cur !== null) {
      if (cur.val === val) return cur;

      cur = cur.next;
    }

    return null;
  }

  update(val, newVal) {
    if (this.head === null) throw "empty list";
    let cur = this.head;
    while (cur !== null) {
      if (cur.val === val) {
        cur.val = newVal;
        return;
      }

      cur = cur.next;
    }

    throw "element not found";
  }

  getElementsArray() {
    const elements = [];
    let curr = this.head;
    while (curr !== null) {
      elements.push(curr.val);
      curr = curr.next;
    }
    return elements;
  }
}
