let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const n = input[0];
const arr = input[1].split(" ").map((el) => parseInt(el));

let ans = 0;
let min = Math.pow(10, 9);

for (let i = 0; i < n; i++) {
  ans = Math.max(ans, arr[i] - min);
  min = Math.min(min, arr[i]);
}

console.log(ans);
