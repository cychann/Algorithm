const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
// const input = fs.readFileSync("example.txt").toString().trim();

/*
0으로 시작하는 경우도 있음
최소가 되려면 -> "-"를 기준으로 나눠야함
*/
function calculateSum(expression) {
  const numbers = expression.split("+");
  let sum = 0;
  for (let num of numbers) {
    sum += parseInt(num, 10);
  }
  return sum;
}

let result = 0;
const parts = input.split("-");

result += calculateSum(parts[0]);

for (let i = 1; i < parts.length; i++) {
  result -= calculateSum(parts[i]);
}

console.log(result);
