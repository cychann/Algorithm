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

function solution(maps) {
  const n = maps.length;
  const m = maps[0].length;

  const visited = Array.from({ length: n }, () => Array(m).fill(false));

  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const queue = new Queue();
  queue.push([0, 0, 1]);
  visited[0][0] = true;

  while (!queue.isEmpty()) {
    const [y, x, result] = queue.pop();

    if (y === n - 1 && x === m - 1) {
      return result;
    }

    for (let i = 0; i < 4; i++) {
      const ny = dy[i] + y;
      const nx = dx[i] + x;

      if (
        0 <= ny &&
        ny < n &&
        0 <= nx &&
        nx < m &&
        maps[ny][nx] === 1 &&
        !visited[ny][nx]
      ) {
        visited[ny][nx] = true;
        queue.push([ny, nx, result + 1]);
      }
    }
  }

  return -1;
}
