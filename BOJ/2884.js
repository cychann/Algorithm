const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let h = Number(input[0]);
let m = Number(input[1]);

m -= 45;

if (m < 0) {
  m += 60;
  h--;
}

if (h < 0) {
  h += 24;
}

console.log(h, m);
