function solution(price, money, count) {
  let sum = 0;

  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  let answer = sum - money;
  return answer > 0 ? answer : 0;
}
