function solution(progresses, speeds) {
  // 순서가 존재함 -> 먼저 개발되어도 앞에 있는 기능이 배포될 때 함께 배포
  // 배포는 하루에 한번.

  // 완료되는 날짜의 값들을 구한다. -> 순회하면서 리턴값을 처리 (순서 생각하면서)

  const completed = progresses.map((progress, idx) => {
    return Math.ceil((100 - progress) / speeds[idx]);
  });

  const result = [];
  let lastReleaseDay = completed[0];
  let cnt = 1;

  for (let i = 1; i < completed.length; i++) {
    if (lastReleaseDay >= completed[i]) cnt++;
    else {
      result.push(cnt);
      lastReleaseDay = completed[i];
      cnt = 1;
    }
  }

  result.push(cnt);

  return result;
}

function solution(progresses, speeds) {
  const result = [];

  while (progresses.length > 0) {
    progresses = progresses.map((p, i) => p + speeds[i]);
    let chk = 0;

    while (progresses[0] >= 100) {
      progresses.shift();
      speeds.shift();
      chk += 1;
    }

    chk > 0 && result.push(chk);
  }

  return result;
}
