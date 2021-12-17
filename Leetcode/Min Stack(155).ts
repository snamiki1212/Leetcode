class Node {
  next: Node | null;
  min: any;
  val: any;
  constructor(val: any, currentMin: any, next: Node) {
    this.val = val;
    this.min = Math.min(val, currentMin);
    this.next = next;
  }

  _next() {
    return this.next;
  }
}

class MinStack {
  current: Node | null;

  constructor() {
    this.current = null;
  }

  push(val: number): void {
    if (this.current == null) {
      this.current = new Node(val, Infinity, null);
    } else {
      this.current = new Node(val, this.current.min, this.current);
    }
  }

  pop(): void {
    this.current = this.current?._next();
  }

  top(): number {
    return this.current?.val;
  }

  getMin(): number {
    return this.current?.min;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
