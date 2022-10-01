let input = require("fs").readFileSync("/dev/stdin").toString().toLowerCase();

let result = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
  result[input.charCodeAt(i) - 97]++;
}

const max = Math.max(...result);
const index = result.indexOf(max);

let same = false;

for (let i = 0; i < 26; i++) {
  if (result[i] === max && index !== i) {
    same = true;
    break;
  }
}

console.log(same ? "?" : String.fromCharCode(index + 65));
