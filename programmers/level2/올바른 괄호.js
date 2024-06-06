function solution(s) {
  let answer = true;
  let chkArr = [0, 0];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") chkArr[0]++;
    else {
      if (chkArr[0] !== 0) chkArr[0]--;
      else answer = false;
    }
  }

  if (chkArr[0] !== 0) answer = false;

  return answer;
}

function solution(s) {
  const stack = [];
  let chk = true;
  s.split("").forEach((part) => {
    if (part === "(") {
      stack.push(part);
    }

    if (part === ")") {
      if (stack.length === 0) {
        chk = false;
        return;
      }

      stack.pop();
    }
  });

  return stack.length === 0 && chk ? true : false;
}
