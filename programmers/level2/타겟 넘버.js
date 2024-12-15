function solution(numbers, target) {
  let answer = 0;
  let N = numbers.length;

  function dfs(count, sum) {
    if (count === N) {
      if (sum === target) {
        answer++;
      }
      return;
    }

    dfs(count + 1, sum + numbers[count]);
    dfs(count + 1, sum - numbers[count]);
  }

  dfs(0, 0);

  return answer;
}
