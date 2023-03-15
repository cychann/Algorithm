function solution(numbers) {
  let answer = 0;
  numbers = numbers.map((n) => n + "");
  numbers.sort((a, b) => b + a - (a + b));
  answer = numbers.join("");

  return answer[0] === "0" ? "0" : answer;
}
