const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("example.txt").toString().trim().split("\n");

const N = parseInt(input[0]);

const friendMatrix = [];
for (let i = 1; i <= N; i++) {
  friendMatrix.push(input[i]);
}

/*
1. 다이렉트 친구이거나
2. 다이렉트 친구의 친구이거나
-> 전체 경우를 탐색 후 최댓값 return / 순회하면서 어차피 계산이 가능하므로 넣기?
*/

const result = [];

for (let i = 0; i < N; i++) {
  const friend = new Set();

  for (let j = 0; j < N; j++) {
    if (friendMatrix[i][j] === "Y") {
      friend.add(j);
    }
  }

  const directFriends = Array.from(friend);

  for (const friendIdx of directFriends) {
    for (let j = 0; j < N; j++) {
      if (friendMatrix[friendIdx][j] === "Y" && j !== i) {
        friend.add(j);
      }
    }
  }

  result.push(friend.size);
}

console.log(Math.max(...result));
