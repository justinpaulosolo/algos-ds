class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // add new node to the end of LinkedList
  append(val) {
    if (this.head === null) {
      this.head = new Node(val);
      return;
    }

    let curr = this.head;

    while (curr.next !== null) {
      curr = curr.next;
    }

    curr.next = new Node(val);
  }

  print() {
    let str = "";
    let curr = this.head;
    while (curr !== null) {
      str += curr.val;
      curr = curr.next;
    }
    console.log(str);
  }

  contains(val) {
    let curr = this.head;

    while (curr !== null) {
      if (curr.val === val) {
        return true;
      }
      curr = curr.next;
    }
    return false;
  }
}

const list = new LinkedList();

list.append("a");
list.append("b");
list.append("c");
list.append("d");
list.print();
console.log(list.contains("x")); // false
console.log(list.contains("a")); // true
