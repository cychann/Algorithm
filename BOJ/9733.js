let input = require("fs")
  .readFileSync("예제.txt")
  .toString()
  .trim()
  .split("\n");

let arr = [];
let obj = {
  Re: 0,
  Pt: 0,
  Cc: 0,
  Ea: 0,
  Tb: 0,
  Cm: 0,
  Ex: 0,
};
let total = 0;

input.forEach((el) => {
  let a = el.split(" ");
  a.map((e) => arr.push(e));
});

arr.forEach((el) => {
  if (Object.keys(obj).includes(el)) {
    obj[el]++;
  }
  total++;
});

for (let key in obj) {
  console.log(key, obj[key], Number((obj[key] / total).toFixed(2)));
}

console.log("Total", total, "1.00");
