// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// // const input = fs.readFileSync("example.txt").toString().trim().split("\n");

// let result = 0;
// const [S, P] = input[0].split(" ").map(Number);
// const dnaString = input[1];
// const [minA, minC, minG, minT] = input[2].split(" ").map(Number);

// for (let i = 0; i <= S - P; i++) {
//   const sliceStr = dnaString.slice(i, i + P);

//   const chkObj = {
//     A: minA,
//     C: minC,
//     G: minG,
//     T: minT,
//   };

//   for (let j = 0; j < sliceStr.length; j++) {
//     chkObj[sliceStr[j]]--;
//   }

//   if (Object.values(chkObj).some((value) => value > 0)) {
//     continue;
//   }

//   result++;
// }

// console.log(result);

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const input = fs.readFileSync("example.txt").toString().trim().split("\n");

let result = 0;
const [S, P] = input[0].split(" ").map(Number);
const dnaString = input[1];
const [minA, minC, minG, minT] = input[2].split(" ").map(Number);

const chkObj = {
  A: minA,
  C: minC,
  G: minG,
  T: minT,
};

for (let j = 0; j < P; j++) {
  chkObj[dnaString[j]]--;
}

if (!Object.values(chkObj).some((value) => value > 0)) {
  result++;
}

for (let i = 1; i <= S - P; i++) {
  chkObj[dnaString[i - 1]]++;

  chkObj[dnaString[i + P - 1]]--;

  if (!Object.values(chkObj).some((value) => value > 0)) {
    result++;
  }
}

console.log(result);
