const {NotImplementedError} = require("../extensions/index.js");

const {Node} = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

// class Node {
//   constructor(data) {
//     this.data = data;
//     this.left = null;
//     this.right = null;
//   }
// }

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    if (!this.rootNode) {
      return null;
    }
    return this.rootNode;
  }

  add(data) {
    const node = new Node(data);
    if (!this.rootNode) {
      this.rootNode = node;
      return;
    }

    let current = this.rootNode;
    while (current) {
      if (current.data < node.data) {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      } else {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      }
    }
  }

  has(data) {
    let current = this.rootNode;
    while (current) {
      if (current.data == data) {
        return true;
      } else {
        if (current.data < data) {
          current = current.right;
        } else {
          current = current.left;
        }
      }
    }
    return false;
  }

  find(data) {
    let current = this.rootNode;
    while (current) {
      if (current.data == data) {
        return current;
      } else {
        if (current.data < data) {
          current = current.right;
        } else {
          current = current.left;
        }
      }
    }
    return null;
  }

  remove(data) {
    if (!this.rootNode) {
      return null;
    }

    let current = this.rootNode;
    while (current) {
      if (current.data == data) {
        current.data = current.data.data;
        return;
      } else {
        if (current.data < data) {
          current = current.right;
        } else {
          current = current.left;
        }
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let current = this.rootNode;
    while (current.left) {
      current = current.left;
    }
    return current.data ? current.data : null;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let current = this.rootNode;
    while (current.right) {
      current = current.right;
    }
    return current.data ? current.data : null;
  }
}

// const tree = new BinarySearchTree();
// tree.add(1);

// tree.add(2);

// tree.add(3);

// tree.add(4);

// tree.add(5);

// tree.add(3);

// console.log(tree);

// console.log(tree.root().data); //; =>1;

// console.log(tree.min()); //=>1

// console.log(tree.max()); //=>5

// tree.remove(5);

// console.log(tree.has(5)); //=>false

// console.log(tree.find(2));

// console.log(tree.max()); //=>4

module.exports = {
  BinarySearchTree,
};
