const { NotImplementedError } = require('../lib/errors');
// const { ListNode } = require('../extensions/list-node.js');

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

class Node {
  constructor (value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  getUnderlyingList() {
    // Remove line below and write your code here
    //throw new NotImplementedError('Not implemented');

    if (!this.head) return null;

    const result = {};
    let current = this.head;
    let target = result;

    while (current) {
      target.value = current.value;
      target.next = current.next ? {} : null;
      current = current.next;
      target = target.next;
    }

    return result;
  }

  enqueue(value) {
    // Remove line below and write your code here
    //throw new NotImplementedError('Not implemented');

    const node = new Node(value);

    if (this.head){
      this.tail.next = node;
      this.tail = node;
    } else {
      this.head = node;
      this.tail = node;
    }
    this.length++;
  }

  dequeue() {
    // Remove line below and write your code here
    //throw new NotImplementedError('Not implemented');
    if (!this.length) return undefined;
    const current = this.head;

    this.head = this.head.next;
    this.length--;

    return current.value;
  }
}

module.exports = {
  Queue
};
