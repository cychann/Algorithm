let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

let toNum = input[1].split("");
let sum = 0;
toNum.map((n) => {
  sum += Number(n);
});
console.log(sum);
