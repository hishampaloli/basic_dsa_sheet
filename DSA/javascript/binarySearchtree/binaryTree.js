class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class binarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    let newNode = new Node(value);
    if (!this.root) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined;
        if (value < current.value) {
          if (!current.left) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (!current.right) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    let current = this.root,
      found = false;

    if (!this.root) return false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }

  findClosest(value) {
    let current = this.root,
      found = false;
    if (!this.root) return false;
    let closest = this.root;

    while (current && !found) {
      if (value < current.value) {
        closest = current;
        current = current.left;
      } else if (value > current.value) {
        closest = current;
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return closest;
  }

  BFS() {
    let node = this.root;
    let data = [];
    let queue = [];

    queue.push(node);
    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  // Left, Root, Right.
  DFSinOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      data.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  // Root, Left, Right.
  DFSpreOrder() {
    let data = [];
    let current = this.root;
    function traverse(node) {
      data.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return data;
  }

  // Left, Right, Root
  DFSpostOrder() {
    let data = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      data.push(node.value);
    }
    traverse(this.root);
    return data;
  }

  smallest() {
    let current = this.root;
    if (!this.root) return false;

    while (current) {
      if (current.left) {
        current = current.left;
      } else {
        return current;
      }
    }
  }

  secondSmallest() {
    let current = this.root;
    if (!this.root) return false;
    let secondSmallest = this.root;

    while (current) {
      if (current.left) {
        secondSmallest = current;
        current = current.left;
      } else {
        return secondSmallest;
      }
    }
  }

  largest() {
    let current = this.root;
    if (!this.root) return false;

    while (current) {
      if (current.right) {
        current = current.right;
      } else {
        return current;
      }
    }
  }

  delete(value) {
    if (!this.root) {
      return null;
    }

    let current = this.root;
    let parent = null;
    let found = false;

    while (current && !found) {
      if (value < current.value) {
        parent = current;
        current = current.left;
      } else if (value > current.value) {
        parent = current;
        current = current.right;
      } else {
        found = true;
      }
    }

    if (!found) {
      return null;
    }

    if (current.left && current.right) {
      let successor = current.right;
      let successorParent = current;

      while (successor.left) {
        successorParent = successor;
        successor = successor.left;
      }

      current.value = successor.value;
      current = successor;
      parent = successorParent;
    }

    let child = null;

    if (current.left) {
      child = current.left;
    } else if (current.right) {
      child = current.right;
    }

    if (!parent) {
      this.root = child;
    } else if (current === parent.left) {
      parent.left = child;
    } else {
      parent.right = child;
    }

    return current;
  }

  deleteRoot() {
    if (!this.root) {
      return null;
    }

    let current = this.root;

    while (current.left) {
      current = current.left;
    }

    this.root.value = current.value;
    this.delete(current.value);
  }
}

let tree = new binarySearchTree();
tree.insert(50);
tree.insert(30);
tree.insert(20);
tree.insert(70);
console.log(tree);
