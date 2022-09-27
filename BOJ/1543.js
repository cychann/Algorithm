let input = require("fs").readFileSync("예제.txt").toString().split("\n");

const n = input[0];
const s = input[1].split(" ");
const max = Math.max(...s);
let sum = 0;

for (let i = 0; i < n; i++) {
  sum += (s[i] / max) * 100;
}

console.log(sum / n);

// /dev/stdin
