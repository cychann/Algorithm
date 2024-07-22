function solution(s) {
  let result = 0;
  const arr = s.split(" ");
  arr.forEach((n, i) => {
    if (n === "Z") {
      result -= Number(arr[i - 1]);
    } else {
      result += Number(n);
    }
  });

  return result;
}

// stack을 이용한 풀이
function solution(s) {
  const stack = [];

  s.split(" ").forEach((target) => {
    if (target === "Z") stack.pop();
    else stack.push(+target);
  });

  return stack.length ? stack.reduce((pre, cur) => pre + cur) : 0;
}
