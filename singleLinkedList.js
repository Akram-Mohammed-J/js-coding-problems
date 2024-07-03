class Node {
  constructor(value = undefined) {
    this.value = value;
    this.next = null;
  }
}

class SingleLinkedList {
  constructor() {
    this.head = new Node(-1);
    this.tail = this.head;
  }
  addNode(value) {
    let newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = this.tail.next;
  }
  print() {
    let curNode = this.head.next;
    while (curNode !== null) {
      console.log(curNode.value);
      curNode = curNode.next;
    }
  }
}

const sl = new SingleLinkedList();

sl.addNode(2);
sl.addNode(5);
sl.addNode(6);

sl.print();
