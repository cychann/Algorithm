// 스택을 이용해야하는 문제
function solution(s) {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (!stack.length || stack[stack.length - 1] !== s[i]) stack.push(s[i]);
    else stack.pop();
  }

  return stack.length ? 0 : 1;
}

// 스택 없이 2중 반복문으로 풀면 시간초과...O(n^2)
function solution(s) {
  let answer = 1;
  let sArr = s.split("");
  let chk = 0;
  while (true) {
    for (let i = 0; i < sArr.length; i++) {
      if (sArr[i] === sArr[i + 1]) {
        chk = 1;
        sArr.splice(i, 2);
        break;
      }
    }

    if (chk === 1 && sArr.length === 0) break;

    if (chk === 0 && sArr) {
      if (sArr[0] !== sArr[1]) answer = 0;
      break;
    }
  }
  return answer;
}
