let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

input.forEach((el) => {
  let a = el.split(" ");
  let idx = 0;
  let chk = 0;

  for (let i = 0; i < a[1].length; i++) {
    if (a[1][i] === a[0][idx]) {
      idx++;
      if (idx === a[0].length) {
        chk = 1;
        break;
      }
    }
  }

  if (chk === 0) console.log("No");
  else console.log("Yes");
});
