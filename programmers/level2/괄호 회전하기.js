// 회전한 문자열이 올바른 괄호 문자열인지 체크하는 함수
function correctString(str) {
  const stack = [];

  for (const s of str) {
    if (s === "[" || s === "(" || s === "{") {
      stack.push(s);
    } else {
      if (stack.length === 0) return 0;
      const last = stack.pop();
      if (
        (s === "]" && last !== "[") ||
        (s === ")" && last !== "(") ||
        (s === "}" && last !== "{")
      ) {
        return 0;
      }
    }
  }

  return stack.length === 0 ? 1 : 0;
}

function solution(s) {
  // s의 길이만큼 회전
  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const rotateStr = s.slice(i) + s.slice(0, i);
    result += correctString(rotateStr);
  }

  return result;
}
