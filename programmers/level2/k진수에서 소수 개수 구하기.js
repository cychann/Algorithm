function solution(n, k) {
  let num = n.toString(k).split("0");
  return num.filter((a) => isPrime(Number(a))).length;
}

const isPrime = (num) => {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};
