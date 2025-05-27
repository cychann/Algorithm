function check(str) {
  let correct = true;
  let left = 0;
  let right = 0;
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      left++;
      stack.push("(");
    } else {
      right++;
      if (stack.length === 0) correct = false;
      else stack.pop();
    }

    if (left === right) {
      return [i + 1, correct];
    }
  }

  return 0, false;
}

function solution(p) {
  let answer = "";

  if (!p) return p;

  const [pos, correct] = check(p);

  const u = p.slice(0, pos);
  const v = p.slice(pos);

  if (correct) {
    return u + solution(v);
  }

  answer = "(" + solution(v) + ")";
  for (let i = 1; i < u.length - 1; i++) {
    if (u[i] === "(") answer += ")";
    else answer += "(";
  }

  return answer;
}
