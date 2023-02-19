const isPrime = (n) => {
  if (n === 1) return false;
  if (n === 2) return true;
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false;
  }
  return true;
};

function solution(nums) {
  let answer = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        isPrime(nums[i] + nums[j] + nums[k]) && answer++;
      }
    }
  }

  return answer;
}
