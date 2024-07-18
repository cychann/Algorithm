function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const transposed = [];

  for (let i = 0; i < cols; i++) {
    const newRow = [];
    for (let j = 0; j < rows; j++) {
      if (matrix[j][i] !== 0) {
        newRow.push(matrix[j][i]);
      }
    }
    transposed.push(newRow.reverse());
  }

  return transposed;
}

function solution(board, moves) {
  // 0은 빈칸
  // 가장 아래칸부터 차곡차곡 쌓여있음
  // 2차원 배열의 크기는 5x5 이상
  // 배열을 돌리고 시작할지, 아니면 하나하나씩 접근하며 배열을 지울지

  const stack = [];
  let result = 0;

  const transposed = transpose(board);

  for (const move of moves) {
    const selected = transposed[move - 1].pop();

    if (!selected) continue;

    if (stack.length !== 0 && stack[stack.length - 1] === selected) {
      result += 2;
      stack.pop();
    } else {
      stack.push(selected);
    }
  }

  return result;
}

/* 다른 풀이 */
function solution(board, moves) {
  const lanes = [...Array(board[0].length)].map(() => []);

  for (let i = board.length - 1; i >= 0; i--) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j]) {
        lanes[j].push(board[i][j]);
      }
    }
  }

  const bucket = [];
  let answer = 0;

  for (const m of moves) {
    if (lanes[m - 1].length > 0) {
      const doll = lanes[m - 1].pop();

      if (bucket.length > 0 && bucket[bucket.length - 1] === doll) {
        bucket.pop();
        answer += 2;
      } else {
        bucket.push(doll);
      }
    }
  }

  return answer;
}
