let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split(" ")
  .map((el) => Number(el));

console.log(input[1] - input[0], input[1]);
