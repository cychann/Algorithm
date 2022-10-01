let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

for (let i = 0; i < input.length - 1; i++) {
  let a = input[i].split(" ").map((n) => parseInt(n));
  a.sort((a, b) => a - b);

  if (a[2] * a[2] === a[0] * a[0] + a[1] * a[1]) {
    console.log("right");
  } else {
    console.log("wrong");
  }
}
