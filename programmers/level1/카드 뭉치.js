function solution(cards1, cards2, goal) {
  let answer = "Yes";
  goal.forEach((word) => {
    if (cards1[0] === word) {
      cards1.shift();
    } else if (cards2[0] === word) {
      cards2.shift();
    } else answer = "No";
  });
  return answer;
}
