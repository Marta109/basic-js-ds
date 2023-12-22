const {NotImplementedError} = require("../extensions/index.js");

// const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  // constructor() {
  //   this.root = null;
  //   this.left = null;
  //   this.right = null;
  // }

  root() {
    // return this.root;
    throw new NotImplementedError("Not implemented");
  }

  add(data) {
    // if (!this.root) {
    //   this.root = data;
    //   return;
    // }
    // if (data > this.root) {
    //   this.right = data;
    //   return;
    // } else {
    //   this.right = data;
    //   return;
    // }
    throw new NotImplementedError("Not implemented");
  }

  has(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  find(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  remove(/* data */) {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError("Not implemented");
    // remove line with error and write your code here
  }
}

// const tree = new BinarySearchTree();
// tree.add(1);

// console.log(tree);

// tree.add(2);

// tree.add(3);

// tree.add(4);

// tree.add(5);

// tree.root().data=>1;

// tree.min()=>1

// tree.max()=>5

// tree.remove(5);

// tree.has(5)=>false

// tree.max()=>4

module.exports = {
  BinarySearchTree,
};
