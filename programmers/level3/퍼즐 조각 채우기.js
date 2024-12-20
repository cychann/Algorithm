/*
1. game_board에서 빈공간에 대한 리스트를 뽑음
2. 퍼즐 조각에 대한 리스트를 뽑음
3. 각 좌표를 일반화 시킴 -> 각 리스트를 순회하면서 블록을 90도로 총 4번 돌려봄(0, 90, 180, 270) -> 매칭되면 블록의 length 만큼 ++
*/

function solution(game_board, table) {
  const N = game_board.length;
  const boardEmptyRegion = [];
  const tableBlockRegion = [];

  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const visitedBoard = Array.from({ length: N }, () => Array(N).fill(false));
  const visitedTable = Array.from({ length: N }, () => Array(N).fill(false));

  function gameBoardSearch(y, x) {
    const queue = [[y, x]];
    const region = [[y, x]];
    visitedBoard[y][x] = true;

    while (queue.length > 0) {
      const [cy, cx] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const ny = cy + dy[i];
        const nx = cx + dx[i];

        if (
          0 <= ny &&
          ny < N &&
          0 <= nx &&
          nx < N &&
          !visitedBoard[ny][nx] &&
          game_board[ny][nx] === 0
        ) {
          visitedBoard[ny][nx] = true;
          queue.push([ny, nx]);
          region.push([ny, nx]);
        }
      }
    }

    boardEmptyRegion.push(region);
  }

  function tableSearch(y, x) {
    const queue = [[y, x]];
    const region = [[y, x]];
    visitedTable[y][x] = true;

    while (queue.length > 0) {
      const [cy, cx] = queue.shift();

      for (let i = 0; i < 4; i++) {
        const ny = cy + dy[i];
        const nx = cx + dx[i];

        if (
          0 <= ny &&
          ny < N &&
          0 <= nx &&
          nx < N &&
          !visitedTable[ny][nx] &&
          table[ny][nx] === 1
        ) {
          visitedTable[ny][nx] = true;
          queue.push([ny, nx]);
          region.push([ny, nx]);
        }
      }
    }

    tableBlockRegion.push(region);
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      if (!visitedBoard[j][i] && game_board[j][i] === 0) {
        gameBoardSearch(j, i);
      }
      if (!visitedTable[j][i] && table[j][i] === 1) {
        tableSearch(j, i);
      }
    }
  }

  function normalizeRegion(region) {
    const minY = Math.min(...region.map(([y, x]) => y));
    const minX = Math.min(...region.map(([y, x]) => x));
    return region.map(([y, x]) => [y - minY, x - minX]).sort();
  }

  function rotateRegion(region) {
    return region.map(([y, x]) => [x, -y]);
  }

  function areRegionsEqual(region1, region2) {
    if (region1.length !== region2.length) return false;
    for (let i = 0; i < region1.length; i++) {
      if (region1[i][0] !== region2[i][0] || region1[i][1] !== region2[i][1]) {
        return false;
      }
    }
    return true;
  }

  let result = 0;
  const usedBlocks = Array.from({ length: tableBlockRegion.length }).fill(
    false
  );

  for (const emptySpace of boardEmptyRegion) {
    const normalizedEmpty = normalizeRegion(emptySpace);

    for (let i = 0; i < tableBlockRegion.length; i++) {
      if (usedBlocks[i]) continue;

      let block = tableBlockRegion[i];
      let matched = false;

      for (let r = 0; r < 4; r++) {
        const normalizedBlock = normalizeRegion(block);
        if (areRegionsEqual(normalizedEmpty, normalizedBlock)) {
          result += block.length;
          usedBlocks[i] = true;
          matched = true;
          break;
        }
        block = rotateRegion(block);
      }

      if (matched) break;
    }
  }

  return result;
}
