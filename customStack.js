class Stack {
  constructor() {
    this.stack = [];
  }
  push(element) {
    this.stack.push(element);
  }
  pop() {
    this.stack.pop();
  }
  peek() {
    let n = this.stack.length;
    return this.stack[n - 1];
  }
  print() {
    let i = 0;
    console.log("-start--");
    while (i < this.stack.length) {
      console.log(this.stack[i]);
      i++;
    }
    console.log("-end--");
  }
}

const s1 = new Stack();
s1.push(3);
s1.push(4);
s1.push(9);
s1.push(11);
s1.print();
s1.pop();
s1.print();
