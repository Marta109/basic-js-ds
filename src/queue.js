const {NotImplementedError} = require("../extensions/index.js");

const {ListNode} = require("../extensions/list-node.js");

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

// class ListNode {
//   constructor(x) {
//     this.value = x;
//     this.next = null;
//   }
// }

class Queue {
  constructor() {
    this.head = null;
    this.next = null;
  }

  getUnderlyingList() {
    if (!this.next) return;
    return this.head;
  }

  enqueue(value) {
    const node = new ListNode(value);

    if (!this.head) {
      this.head = node;
    }

    if (this.next) {
      this.next.next = node;
    }

    this.next = node;
  }

  dequeue() {
    if (!this.head) return;
    const head = this.head.value;
    this.head = this.head.next;
    return head;
  }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(3);
// queue.enqueue(5);
// queue.enqueue(6);
// queue.dequeue();
// console.log(queue);
// console.log(queue.dequeue());
// console.log(queue);
// console.log(queue.getUnderlyingList());

module.exports = {
  Queue,
};
