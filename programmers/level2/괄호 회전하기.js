function solution(s) {
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    let rotateS = s.slice(i) + s.slice(0, i);
    let stack = [];
    let chk = true;

    for (let bracket of rotateS) {
      if (bracket === "(" || bracket === "[" || bracket === "{")
        stack.push(bracket);
      else {
        let chkLastBracket = stack.pop();

        if (chkLastBracket === "(" && bracket === ")") continue;
        if (chkLastBracket === "[" && bracket === "]") continue;
        if (chkLastBracket === "{" && bracket === "}") continue;
        chk = false;
      }
    }
    if (stack.length !== 0) chk = false;
    chk && answer++;
  }
  return answer;
}

// console.log(solution('()('))
// console.log(solution('('))
// console.log(solution('{{{{{{'))
