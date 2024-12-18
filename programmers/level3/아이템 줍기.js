function isOnOutline(y, x, rectangle) {
  let isOutline = false;
  let isInside = false;

  for (const [lx, ly, rx, ry] of rectangle) {
    // 내부인지 확인 (겹친 직사각형을 고려하기 위해)
    if (lx < x && x < rx && ly < y && y < ry) {
      isInside = true;
    }

    // 테두리 위에 있는지 확인
    if (
      ((x === lx || x === rx) && ly <= y && y <= ry) || // 좌우 테두리
      ((y === ly || y === ry) && lx <= x && x <= rx) // 상하 테두리
    ) {
      isOutline = true;
    }
  }

  return isOutline && !isInside;
}

function solution(rectangle, characterX, characterY, itemX, itemY) {
  rectangle = rectangle.map(([lx, ly, rx, ry]) => [
    lx * 2,
    ly * 2,
    rx * 2,
    ry * 2,
  ]);
  characterX *= 2;
  characterY *= 2;
  itemX *= 2;
  itemY *= 2;

  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];
  const queue = [[characterY, characterX, 0]];
  const visited = Array.from({ length: 102 }, () =>
    Array.from({ length: 102 }, () => false)
  );
  visited[characterY][characterX] = true;

  while (queue.length > 0) {
    const [y, x, count] = queue.shift();

    if (y === itemY && x === itemX) {
      return count / 2;
    }

    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];

      if (!visited[ny][nx] && isOnOutline(ny, nx, rectangle)) {
        visited[ny][nx] = true;
        queue.push([ny, nx, count + 1]);
      }
    }
  }
}
