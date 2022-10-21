class Node {
  constructor(val) {
    this.val = val;
    this.right = null;
    this.left = null;
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

// Iterative
const depthFirstPrint = (root) => {
  const stack = [root];

  while (stack.length > 0) {
    const curr = stack.pop();
    console.log(curr.val);

    if (curr.right !== null) {
      stack.push(curr.right);
    }
    if (curr.left !== null) {
      stack.push(curr.left);
    }
  }
}; // O(n) time, O(n) space

// recursion
const depthFirstPrintV2 = (root) => {
  // the tree is empty
  if (root === null) return;

  console.log(root.val);
  depthFirstPrintV2(root.left);
  depthFirstPrintV2(root.right);
}; // O(n) time, O(n) space

// pre-order traversal
// self, left, right
const preOrder = (root) => {
  if (root === null) return;

  console.log(root.val);

  preOrder(root.left);
  preOrder(root.right);
};

// post-order traversal
// left, right, sefl
const postOrder = (root) => {
  if (root === null) return;

  preOrder(root.left);
  preOrder(root.right);

  console.log(root.val);
};

// post-order traversal
// left, right, self
const inOrder = (root) => {
  if (root === null) return;

  preOrder(root.left);
  console.log(root.val);
  preOrder(root.right);
};

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

const totalSum = (root) => {
  if (root === null) return 0;
  return totalSum(root.left) + root.val + totalSum(root.right);
};

//depthFirstPrint(a)
//depthFirstPrintV2(a)
//preOrder(a);
//postOrder(a);
//inOrder(a);
console.log(totalSum(g));
