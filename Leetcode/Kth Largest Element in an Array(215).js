/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const heap = new Heap();
  nums.forEach((num) => heap.add(num));
  Array.from({ length: k - 1 }).forEach(() => heap.extract());
  return heap.extract();
};

class Heap {
  constructor() {
    this.values = [];
  }

  // get Idx
  #getParrentIdx = (idx) => Math.floor((idx - 1) / 2);
  #getLeftChildIdx = (idx) => 2 * idx + 1;
  #getRightChildIdx = (idx) => 2 * idx + 2;

  // get condition
  #hasParrent = (idx) => idx !== 0;
  #hasLeftChild = (idx) => this.#getLeftChildIdx(idx) < this.values.length;
  #hasRightChild = (idx) => this.#getRightChildIdx(idx) < this.values.length;

  // getter
  #parrent = (idx) => this.values[this.#getParrentIdx(idx)];
  #left = (idx) => this.values[this.#getLeftChildIdx(idx)];
  #right = (idx) => this.values[this.#getRightChildIdx(idx)];

  // mutate
  #swap = (idx1, idx2) => {
    [this.values[idx1], this.values[idx2]] = [
      this.values[idx2],
      this.values[idx1],
    ];
  };

  #heapifyUp() {
    let idx = this.values.length - 1;
    const current = this.values[idx];
    while (this.#hasParrent(idx)) {
      const shouldMoveUp = this.#parrent(idx) <= current;
      if (!shouldMoveUp) break;

      this.#swap(idx, this.#getParrentIdx(idx));
      idx = this.#getParrentIdx(idx);
    }
  }

  #heapifyDown() {
    // re-organize to traverse from top to bottom
    let idx = 0;
    while (this.#hasLeftChild(idx)) {
      const rightIsGreaterThanLeft =
        this.#hasRightChild(idx) && this.#right(idx) > this.#left(idx);

      const largerChildIdx = rightIsGreaterThanLeft
        ? this.#getRightChildIdx(idx)
        : this.#getLeftChildIdx(idx);

      // break condition
      const shouldMoveDown = this.values[idx] < this.values[largerChildIdx];
      if (!shouldMoveDown) break;

      this.#swap(idx, largerChildIdx);
      idx = largerChildIdx;
    }
  }

  add(element) {
    this.values.push(element);
    this.#heapifyUp();
  }

  extract() {
    const top = this.values[0];
    this.values[0] = this.values.pop();
    this.#heapifyDown();
    return top;
  }
}
