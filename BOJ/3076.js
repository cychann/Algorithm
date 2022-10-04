let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

const [r, c] = input[0].split(" ");
const [a, b] = input[1].split(" ");

for (let i = 0; i < r * a; i++) {
  let result = "";
  for (let j = 0; j < c * b; j++) {
    if (Math.floor((i / a) % 2) === 0) {
      if (Math.floor((j / b) % 2) === 0) {
        result += "X";
      } else {
        result += ".";
      }
    } else {
      if (Math.floor((j / b) % 2) === 0) {
        result += ".";
      } else {
        result += "X";
      }
    }
  }
  console.log(result);
}
