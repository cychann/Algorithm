function solution(numbers) {
  let result = [];
  for (let i = 0; i < numbers.length - 1; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      let sum = numbers[i] + numbers[j];
      if (!result.includes(sum)) result.push(sum);
    }
  }

  return result.sort((a, b) => a - b);
}
