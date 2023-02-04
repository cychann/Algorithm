function solution(order) {
  let answer = 0;
  (order + "").split("").forEach((n) => {
    if (n === "3" || n === "6" || n === "9") answer++;
  });

  return answer;
}
