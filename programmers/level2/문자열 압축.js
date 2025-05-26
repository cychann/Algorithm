function solution(s) {
  let answer = s.length;

  for (let i = 1; i <= s.length / 2; i++) {
    let cnt = 1;
    let str = "";
    let currStr = s.substr(0, i);
    for (let j = i; j <= s.length; j += i) {
      const nextStr = s.substr(j, i);

      if (nextStr === currStr) {
        cnt++;
      } else {
        cnt === 1 ? (str += currStr) : (str = str + cnt + currStr);

        cnt = 1;
        currStr = nextStr;
      }
    }

    cnt === 1 ? (str += currStr) : (str = str + cnt + currStr);
    answer = Math.min(answer, str.length);
  }

  return answer;
}
