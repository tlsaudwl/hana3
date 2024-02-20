import assert from "assert"; // ESM
// ⇒ const assert = require('assert'); // CJS

class Collection {
  #arr;

  constructor(...args) {
    this.#arr = Array.isArray(args[0]) ? args[0] : args;
  }

  get _arr() {
    return this.#arr;
  }

  push(value) {
    this.#arr.push(value);
    return this;
  }

  // 여러번 사용하기 때문에 쓰는게 좋음
  // isStack(){
  //     return this.constructor.name === "Stack";
  // }

  get peek() {
    return this.constructor.name === "Stack" ? this.#arr.at(-1) : this.#arr.at(0);
  }

  get poll() {
    return this.constructor.name === "Stack" ? this.#arr.pop() : this._arr.shift();
  }

  clear() {
    this.#arr = [];
  }

  toArray() {
    return [...this.#arr];
  }

  remove() {
    return this.constructor.name === "Stack" ? this._arr.pop() : this.poll();
  }

  get isEmpty() {
    return !this.#arr.length;
  }

  get size() {
    return this.#arr.length;
  }
}

class Stack extends Collection {
  pop() {
    return this._arr.pop();
  }
}

class Queue extends Collection {
  enqueue(value) {
    this.push(value);
    return this;
  }

  dequeue() {
    return this._arr.shift();
  }
}

// 아래 코드가 통과되도록 Collection 클래스의 method를 작성하시오!
const stack = new Stack();
stack.push(1).push(2).push(3).push(5);
assert.deepStrictEqual(stack.toArray(), [1, 2, 3, 5]);
stack.pop();
assert.strictEqual(stack.peek, 3);
stack.remove();
assert.strictEqual(stack.poll, 2);
assert.deepStrictEqual(stack.toArray(), [1]);
const queue = new Queue();
queue.enqueue(1).enqueue(3).enqueue(5);
queue.dequeue();
assert.deepStrictEqual(queue.toArray(), [3, 5]);
assert.strictEqual(queue.poll, 3);
assert.deepStrictEqual(queue.toArray(), [5]);
if (!stack.isEmpty) stack.clear();
if (queue.size) queue.clear();
assert.deepStrictEqual(stack.toArray(), []);
assert.deepStrictEqual(queue.toArray(), []);
