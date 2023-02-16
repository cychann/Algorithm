function solution(s) {
  let answer = [];
  let chk = [];

  [...s].forEach((str) => {
    if (!chk.includes(str)) {
      answer.push(-1);
    }

    if (chk.includes(str)) {
      answer.push(chk.length - chk.lastIndexOf(str));
    }

    chk.push(str);
  });

  return answer;
}
