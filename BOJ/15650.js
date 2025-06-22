const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();

const [N, M] = input.split(" ").map(Number);

const result = [];

function backtrack(nums, start) {
  if (nums.length === M) {
    result.push(nums);
    return;
  }

  for (let i = start; i <= N; i++) {
    backtrack(nums.concat(i), i + 1);
  }
}

backtrack([], 1);

result.forEach((arr) => {
  console.log(arr.join(" "));
});
