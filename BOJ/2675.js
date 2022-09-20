const input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const n = input.shift();

for (let i = 0; i < n; i++) {
  let ans = "";

  const [r, str] = input[i].split(" ");

  for (let j = 0; j < str.length; j++) {
    ans += str[j].repeat(r);
  }

  console.log(ans);
}
