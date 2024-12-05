class Node {
  constructor(info, num, left = null, right = null) {
    this.info = info;
    this.num = num;
    this.left = left;
    this.right = right;
  }

  hasLeft() {
    return this.left !== null;
  }

  hasRight() {
    return this.right !== null;
  }
}

function makeBT(nodeinfo) {
  const nodes = Array.from({ length: nodeinfo.length }, (_, i) => i + 1);
  nodes.sort((a, b) => {
    const [ax, ay] = nodeinfo[a - 1];
    const [bx, by] = nodeinfo[b - 1];
    return ay === by ? ax - bx : by - ay;
  });

  let root = null;
  for (const node of nodes) {
    if (!root) {
      root = new Node(nodeinfo[node - 1], node);
    } else {
      let parent = root;
      const newNode = new Node(nodeinfo[node - 1], node);

      while (true) {
        if (newNode.info[0] < parent.info[0]) {
          if (parent.hasLeft()) {
            parent = parent.left;
            continue;
          }
          parent.left = newNode;
          break;
        } else {
          if (parent.hasRight()) {
            parent = parent.right;
            continue;
          }
          parent.right = newNode;
          break;
        }
      }
    }
  }

  return root;
}

function preOrder(root, answer) {
  if (root === null) {
    return;
  }

  answer[0].push(root.num);
  preOrder(root.left, answer);
  preOrder(root.right, answer);
}

function postOrder(root, answer) {
  if (root === null) {
    return;
  }

  postOrder(root.left, answer);
  postOrder(root.right, answer);
  answer[1].push(root.num);
}

function solution(nodeinfo) {
  const answer = [[], []];
  const root = makeBT(nodeinfo);
  preOrder(root, answer);
  postOrder(root, answer);

  return answer;
}
