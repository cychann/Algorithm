function solution(dirs) {
  let place = [0, 0];
  const move = { U: [0, 1], D: [0, -1], R: [1, 0], L: [-1, 0] };
  const chk = new Set();

  [...dirs].forEach((dir) => {
    let x = place[0] + move[dir][0];
    let y = place[1] + move[dir][1];

    if (x <= 5 && x >= -5 && y <= 5 && y >= -5) {
      chk.add("" + place[0] + place[1] + x + y);
      chk.add("" + x + y + place[0] + place[1]);

      place = [x, y];
    }
  });
  return chk.size / 2;
}
