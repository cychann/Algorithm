let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = input.shift(1);

for (let i = 0; i < input.length; i++) {
  let str = input[i];

  let first = str[0];
  let second = str[str.length - 1];

  console.log(first + second);
}
