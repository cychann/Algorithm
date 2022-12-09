function solution(numbers) {
  var answer = 0;
  answer = numbers.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
  return answer / numbers.length;
}
