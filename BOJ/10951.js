let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

input.forEach((el) => {
  let a = el.split(" ");
  let sum = 0;
  a.forEach((n) => {
    sum += Number(n);
  });
  console.log(sum);
});
