const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const T = parseInt(input[0]);

for (let t = 1; t <= T; t++) {
  const N = parseInt(input[t]);
  const result = [];

  function search(idx, currExpression, currValue, prevValue) {
    if (idx === N) {
      if (currValue === 0) result.push(currExpression);
      return;
    }

    const nextNum = idx + 1;

    const nextPrevValue =
      prevValue < 0 ? prevValue * 10 - nextNum : prevValue * 10 + nextNum;

    search(
      idx + 1,
      currExpression + "+" + nextNum,
      currValue + nextNum,
      nextNum
    );
    search(
      idx + 1,
      currExpression + "-" + nextNum,
      currValue - nextNum,
      -nextNum
    );
    search(
      idx + 1,
      currExpression + " " + nextNum,
      currValue - prevValue + nextPrevValue,
      nextPrevValue
    );
  }

  search(1, "1", 1, 1);

  result.sort();
  result.forEach((expr) => console.log(expr));

  if (t < T) {
    console.log();
  }
}
