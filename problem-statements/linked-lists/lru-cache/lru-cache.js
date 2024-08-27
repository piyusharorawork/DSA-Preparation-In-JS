import { DoublyLinkedList } from "../../../data-structures/doubly-linked-list/doubly-linked-list";

export class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.dll = new DoublyLinkedList();
    // To store the key - node pair
    this.map = {};
    this.count = 0;
  }

  get(key) {
    if (!this.map[key]) return -1;

    const node = this.map[key];
    this.dll.deleteNode(node);
    this.dll.insertBeg(node.val);

    return node.val.value;
  }

  put(key, value) {
    // if key already exists
    if (this.map[key]) {
      const node = this.map[key];
      node.val.value = value;
      this.dll.deleteNode(node);
      this.dll.insertBeg(node.val);
      return;
    }

    if (this.count >= this.capacity) {
      const deletedNode = this.dll.deleteEnd();
      delete this.map[deletedNode.val.key];
      this.count--;
    }

    const node = this.dll.insertBeg({ key, value });
    this.map[key] = node;
    this.count++;
  }
}
