let input = require("fs").readFileSync("/dev/stdin").toString().trim();

for (let i = 0; i < Number(input); i++) {
  console.log("*".repeat(Number(input) - i));
}
