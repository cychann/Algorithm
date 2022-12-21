function solution(numbers) {
  let answer = 0;
  let sortedNum = numbers.sort((a, b) => b - a);
  answer = sortedNum[0] * sortedNum[1];
  return answer;
}
