function solution(priorities, location) {
  let answer = 0;
  let maxPriority = Math.max(...priorities);

  while (priorities) {
    const currPrioritiy = priorities.shift();

    if (currPrioritiy === maxPriority) {
      answer++;
      if (location === 0) return answer;
      maxPriority = Math.max(...priorities);
    } else {
      priorities.push(currPrioritiy);
    }

    location = location === 0 ? priorities.length - 1 : location - 1;
  }

  return answer;
}
