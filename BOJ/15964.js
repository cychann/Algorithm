let input = require("fs").readFileSync("예제.txt").toString().trim();
let a = Number(input[0]);
let b = Number(input[1]);

console.log((a + b) * (a - b));
