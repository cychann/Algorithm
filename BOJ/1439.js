let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

let chk = input[0][0];
let arr = [0, 0];
arr[Number(chk)] += 1;

for (let i = 0; i < input[0].length; i++) {
  if (chk !== input[0][i]) {
    chk = input[0][i];
    arr[Number(chk)]++;
  }
}

console.log(Math.min(...arr));
