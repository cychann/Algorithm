let input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");

let n = input[0];
let st = input[1];

for (let i = 0; i < n; i++) {
  let Scnt = st.split("s").length - 1;
  let Tcnt = st.split("t").length - 1;

  if (Scnt === Tcnt) break;
  else {
    st = st.substr(1);
  }
}

console.log(st);
