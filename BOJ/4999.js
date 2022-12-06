let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");
if (input[0].length < input[1].length) console.log("no");
else console.log("go");
