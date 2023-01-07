function solution(n) {
  return (n + "").split("").reduce((prev, curr) => +prev + +curr, 0);
}
