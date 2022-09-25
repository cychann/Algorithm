const input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let cnt = 0;

for (let i = 0; i < 7; i++) {
  if (input[i] < input[i + 1]) {
    cnt++;
  }
}

const result = {
  0: "descending",
  7: "ascending",
}[cnt];

console.log(result || "mixed");
