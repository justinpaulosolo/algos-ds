class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");
const f = new Node("f");

//            a
//          /   \
//        b      c
//      /   \   /  \
//     d    e       f

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const breadthFirstPrint = (root) => {
  const queue = [root];

  while (queue.length > 0) {
    const curr = queue.shift();
    console.log(curr.val);
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
};

const breadthFirstSearch = (root, target) => {
  const queue = [root];

  while (queue.length > 0) {
    const curr = queue.shift();

    if (curr.val === target) {
      return true;
    }
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
  return false;
};

breadthFirstPrint(a);

console.log(breadthFirstSearch(a, "a")); // returns true
console.log(breadthFirstSearch(a, "z")); // returns false

const g = new Node(3);
const h = new Node(2);
const j = new Node(7);
const k = new Node(4);
const l = new Node(-2);
const m = new Node(5);

g.left = h;
g.right = j;
h.left = k;
h.right = l;
j.right = m;

//            3
//          /   \
//        2      7
//      /   \   /  \
//     4    -2      5

const sumTree = (root) => {
  const queue = [root];
  let sum = 0;

  while (queue.length > 0) {
    const curr = queue.shift();
    sum += curr.val;
    if (curr.left !== null) {
      queue.push(curr.left);
    }
    if (curr.right !== null) {
      queue.push(curr.right);
    }
  }
  return sum;
};

console.log(sumTree(g));
