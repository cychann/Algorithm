function solution(priorities, location) {
  let answer = 0;
  while (priorities.length > 0) {
    const chk = priorities.shift();
    if (chk >= Math.max(...priorities)) {
      answer++;
      if (location === 0) break;
    } else {
      priorities.push(chk);
    }

    location--;
    if (location === -1) {
      location = priorities.length - 1;
    }
  }
  return answer;
}
