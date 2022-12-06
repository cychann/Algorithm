let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

input.forEach((el) => {
  if (el !== "0 0") {
    let a = el.split(" ");
    if (Number(a[0] > Number(a[1]))) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
});
