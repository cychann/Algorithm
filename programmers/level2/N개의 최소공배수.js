function solution(num) {
  return num.reduce((a, b) => (a * b) / getGCD(a, b));
}

const getGCD = (num1, num2) => (num2 > 0 ? getGCD(num2, num1 % num2) : num1);
