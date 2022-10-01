let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const first = input[0].split(" ");
const second = input[1].split(" ").map((n) => parseInt(n));

const n = parseInt(first[0]);
const m = parseInt(first[1]);

let max = 0;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    for (let k = 0; k < n; k++) {
      if (i === j || i === k || j === k) continue;

      let sum = second[i] + second[j] + second[k];
      if (sum > max && sum <= m) max = sum;

      if (max === m) break;
    }
  }
}
console.log(max);
