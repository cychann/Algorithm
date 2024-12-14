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

function solution(board) {
  /*
    큐에 필요한 정보 -> 현재까지의 cost / 현재 도로의 방향 / 현재 도로의 좌표
    */

  function calculateCost(direction, prevDirection, cost) {
    if (prevDirection === -1 || (prevDirection - direction) % 2 === 0) {
      return cost + 100;
    } else {
      return cost + 600;
    }
  }

  const queue = new Queue();
  queue.push([0, 0, -1, 0]);
  const N = board.length;
  const dy = [-1, 0, 1, 0];
  const dx = [0, 1, 0, -1];
  const visited = Array.from({ length: N }, () =>
    Array.from({ length: N }, () => Array(4).fill(0))
  );
  let answer = Infinity;

  while (!queue.isEmpty()) {
    const [x, y, prevDirection, cost] = queue.pop();

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (0 <= ny && ny < N && 0 <= nx && nx < N && board[nx][ny] === 0) {
        const newCost = calculateCost(i, prevDirection, cost);

        if (nx === N - 1 && ny === N - 1) {
          answer = Math.min(answer, newCost);
        } else if (visited[nx][ny][i] === 0 || visited[nx][ny][i] > newCost) {
          queue.push([nx, ny, i, newCost]);
          visited[nx][ny][i] = newCost;
        }
      }
    }
  }

  return answer;
}
