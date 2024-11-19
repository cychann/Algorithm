function solution(n, a, b) {
  let answer = 0;

  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}

//
function solution(n, a, b) {
  let answer = 0;

  while (true) {
    answer += 1;
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);

    if (a == b) {
      return answer;
    }
  }
}
