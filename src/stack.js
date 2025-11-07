const { NotImplementedError } = require('../lib/errors');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  push(value) {
    // Remove line below and write your code here
    //throw new NotImplementedError('Not implemented');
    const node = new Node(value);

    if (this.head) {
      node.next = this.head;
      this.head = node;
    } else this.head = node;

    this.length++;
  }

  pop() {
    // Remove line below and write your code here
    //throw new NotImplementedError('Not implemented');

    if (!this.length) return undefined;
    const current = this.head;
    this.head = this.head.next;
    this.length--;

    return current.value;
  }

  peek() {
    // Remove line below and write your code here
    //throw new NotImplementedError('Not implemented');

    if (!this.length) return undefined;
    return this.head.value;
  }
}

module.exports = {
  Stack,
};
