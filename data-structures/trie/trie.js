export class TrieNode {
  constructor(val) {
    this.val = val === undefined ? "" : val;
    this.isEnd = false;
    this.children = [];
  }
}

export class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  getChild(node, ch) {
    for (const child of node.children) {
      if (child.val === ch) {
        return child;
      }
    }
    return null;
  }

  insert(word) {
    let cur = this.root;
    for (const ch of word) {
      const child = this.getChild(cur, ch);
      if (child) {
        cur = child;
      } else {
        const node = new TrieNode(ch);
        cur.children.push(node);
        cur = node;
      }
    }
    cur.isEnd = true;
  }

  search(word) {
    let cur = this.root;
    for (const ch of word) {
      const child = this.getChild(cur, ch);
      if (!child) return false;
      cur = child;
    }
    return cur.isEnd;
  }

  startsWith(prefix) {
    let cur = this.root;
    for (const ch of prefix) {
      const child = this.getChild(cur, ch);
      if (!child) return false;
      cur = child;
    }
    return true;
  }
}
