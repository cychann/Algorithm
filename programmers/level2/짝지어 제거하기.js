function solution(s) {
  // 문자열의 최대 길이 1,000,000 -> O(n)

  const stack = [];
  for (const str of s) {
    if (stack.length === 0) {
      stack.push(str);
      continue;
    }

    const top = stack[stack.length - 1];

    if (top === str) {
      stack.pop();
    } else {
      stack.push(str);
    }
  }

  return stack.length === 0 ? 1 : 0;
}
