const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim();
const [N, M] = input.split(" ").map(Number);

const result = [];

function backtrack(nums, visited) {
  if (nums.length === M) {
    result.push(nums);
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    backtrack(nums.concat(i), visited);
    visited[i] = false;
  }
}

backtrack([], Array(N + 1).fill(false));

result.forEach((arr) => {
  console.log(arr.join(" "));
});
