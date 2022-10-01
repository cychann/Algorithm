let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let mbti = input.shift(1);
let n = input.shift(1);

let cnt = 0;

input.forEach((m) => {
  if (m === mbti) cnt++;
});

console.log(cnt);
