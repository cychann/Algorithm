let input = require("fs").readFileSync("/dev/stdin").toString();

let inputToNum = Number(input);
let m = 0;

for (let i = 0; i < inputToNum; i++) {
  let sum = 0;
  let n = i;

  sum += parseInt(n);
  while (n !== 0) {
    sum += parseInt(n % 10);
    n = parseInt(n / 10);
  }

  if (sum === inputToNum) {
    m = i;
    break;
  }
}

console.log(m);
