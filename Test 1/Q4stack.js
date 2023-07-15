class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  // Add an item to the stack
  push(data) {
    const newNode = new Node(data);
    newNode.next = this.top;
    this.top = newNode;
    this.size++;
  }

  // Remove and return the top item from the stack
  pop() {
    if (!this.top) {
      return null; // Stack is empty
    }
    const removedNode = this.top;
    this.top = this.top.next;
    this.size--;
    return removedNode.data;
  }

  // Return the top item from the stack without removing it
  peek() {
    if (!this.top) {
      return null; // Stack is empty
    }
    return this.top.data;
  }

  // Check if the stack is empty
  isEmpty() {
    return this.top === null;
  }

  // Return the number of items in the stack
  getSize() {
    return this.size;
  }

  // Clear the stack
  clear() {
    this.top = null;
    this.size = 0;
  }
}
const stack = new Stack();

// Pushing items to the stack
stack.push(10);
stack.push(20);
stack.push(30);

console.log("top element: " + stack.peek());

console.log("pop : " + stack.pop());

stack.push(40);

console.log("size of stack:  " + stack.getSize());

console.log("checking if stack is empty : " + stack.isEmpty());
console.log("popping elements:");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log("size of stack:  " + stack.getSize());

console.log("check id stack is empty: " + stack.isEmpty());
