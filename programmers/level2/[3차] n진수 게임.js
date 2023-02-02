function solution(n, t, m, p) {
  let answer = [];
  let result = "";
  for (let i = 0; i < t * m; i++) {
    i.toString(n)
      .split("")
      .forEach((s) => {
        const regExp = /[a-zA-Z]/;
        if (regExp.test(s)) s = s.toUpperCase();
        answer.push(s);
      });
  }

  let chk = p - 1;
  for (let i = 0; i < t; i++) {
    result += answer[chk];
    chk += m;
  }

  return result;
}
