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

  // O1
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
    return node;
  }

  // O1
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
    return node;
  }

  // O1
  deleteBeg() {
    if (this.head === null) throw "no nodes left to delete";

    // if only one node
    if (this.head.next === null) {
      const cur = this.head;
      this.head = null;
      this.tail = null;
      return cur;
    }

    const curr = this.head;
    this.head = this.head.next;
    this.head.prev = null;

    return curr;
  }

  // O1
  deleteEnd() {
    if (this.tail === null) throw "no nodes left to delete";

    // Only 1 node
    if (this.tail.prev === null) {
      const cur = this.tail;
      this.tail = null;
      this.head = null;
      return cur;
    }

    const curr = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;

    return curr;
  }

  // O1
  deleteNode(node) {
    // No nodes
    if (this.head === null) throw "no nodes found";

    if (this.head === node) return this.deleteBeg(this.head);

    if (this.tail === node) return this.deleteEnd(this.head);

    node.prev.next = node.next;
    node.next.prev = node.prev;
    return node;
  }

  // ON
  getElementsArray() {
    const elements = [];
    let curr = this.head;
    while (curr !== null) {
      elements.push(curr.val);
      curr = curr.next;
    }
    return elements;
  }

  // O1
  isEmpty() {
    return this.head === null;
  }

  peekEnd() {
    return this.tail;
  }

  peekFront() {
    return this.head;
  }
}
