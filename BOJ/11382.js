let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

console.log(input[0].split(" ").reduce((a, b) => Number(a) + Number(b)));
