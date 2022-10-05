let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let s = input[0];
let t = input[1];
let s1 = "";
let t1 = "";
let lcm = 1;

while (true) {
  if (lcm % s.length == 0 && lcm % t.length == 0) {
    break;
  }
  lcm++;
}

for (let i = 0; i < Math.floor(lcm / s.length); i++) s1 += s;
for (let i = 0; i < Math.floor(lcm / t.length); i++) t1 += t;

console.log(s1 === t1 ? 1 : 0);
