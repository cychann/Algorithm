function solution(dirs) {
  const cord = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  const load = new Set();
  let result = 0;
  const user = [0, 0];

  // 지나온 길인지 확인하는 방법 -> 지나갈때마다 좌표값을 stack에 쌓고, 있는지 판별하면 됨

  for (const dir of dirs) {
    const [x, y] = cord[dir];
    const nextX = user[0] + x;
    const nextY = user[1] + y;

    // 좌표를 벗어나는 명령어는 무시함
    if (nextX > 5 || nextX < -5 || nextY > 5 || nextY < -5) {
      continue;
    }

    // 지나온 길을 저장 -> 이동 전후의 좌표를 모두 알아야함
    const path1 = `${user[0]},${user[1]}:${nextX},${nextY}`;
    const path2 = `${nextX},${nextY}:${user[0]},${user[1]}`;

    // 좌표값을 확인. 지나온 길이 아니라면 지나온 좌표를 추가하고 결과값 +1
    if (!load.has(path1) && !load.has(path2)) {
      load.add(path1);
      load.add(path2);
      result += 1;
    }

    user[0] = nextX;
    user[1] = nextY;
  }

  return result;
}
