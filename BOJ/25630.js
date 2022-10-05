let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = input[0];
let st = input[1];
let cnt = 0;

for (let i = 0; i < n / 2; i++) {
  if (st[i] !== st[st.length - i - 1]) cnt++;
}

console.log(cnt);
