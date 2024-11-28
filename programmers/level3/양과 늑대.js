class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

function buildTree(info, edges) {
  const tree = Array.from({ length: info.length }, () => []);

  for (const [from, to] of edges) {
    tree[from].push(to);
  }

  return tree;
}

function solution(info, edges) {
  const tree = buildTree(info, edges);
  const q = new Queue();
  let maxSheep = 0;

  q.push([0, 1, 0, new Set()]);

  while (!q.isEmpty()) {
    const [current, sheepCount, wolfCount, visited] = q.pop();
    maxSheep = Math.max(maxSheep, sheepCount);

    for (const next of tree[current]) {
      visited.add(next);
    }

    for (const next of visited) {
      if (info[next]) {
        // 늑대
        if (sheepCount !== wolfCount + 1) {
          const newVisited = new Set(visited);
          newVisited.delete(next);
          q.push([next, sheepCount, wolfCount + 1, newVisited]);
        }
      } else {
        // 양
        const newVisited = new Set(visited);
        newVisited.delete(next);
        q.push([next, sheepCount + 1, wolfCount, newVisited]);
      }
    }
  }

  return maxSheep;
}
