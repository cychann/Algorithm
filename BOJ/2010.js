let input = require("fs").readFileSync("예제.txt").toString().split("\n");
let count = Number(input[0]);
let ans = 0;

for (let i = 1; i <= count; i++) {
  ans += Number(input[i]);
}

console.log(ans - count + 1);
