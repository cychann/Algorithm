let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

const n = input.shift();
const search = Number(input[1]);
let cnt = 0;

input[0].split(" ").map((el) => {
  if (Number(el) === search) cnt++;
});

console.log(cnt);
