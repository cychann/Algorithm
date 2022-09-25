let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let sum = input.reduce((a, b) => a * b).toString();
let arr = Array.from({ length: 10 }, () => 0);

sum.split("").map((n) => arr[n]++);

arr.forEach((e) => console.log(e));

// for (let i = 0; i <= 9; i++) {
//     console.log(num.split(i + '').length - 1);
//  }
