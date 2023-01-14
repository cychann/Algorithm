function solution(progresses, speeds) {
  let leftDays = [];
  let answer = [];
  for (let i = 0; i < progresses.length; i++) {
    let cnt = 0;
    while (progresses[i] < 100) {
      progresses[i] += speeds[i];
      cnt++;
    }
    leftDays.push(cnt);
  }

  let chk = 1;
  let chkDay = leftDays[0];
  for (let i = 1; i < leftDays.length; i++) {
    if (chkDay >= leftDays[i]) {
      chk++;
    } else {
      chkDay = leftDays[i];
      answer.push(chk);
      chk = 1;
    }
  }

  answer.push(chk);

  return answer;
}
