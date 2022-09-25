let input = require("fs").readFileSync("/dev/stdin").toString().split(" ");

let n1 = Number(input[0].split("").reverse().join(""));
let n2 = Number(input[1].split("").reverse().join(""));

console.log(n1 > n2 ? n1 : n2);
