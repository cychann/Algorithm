function solution(prices) {
  // prices의 최대 길이 100,000 O(n^2) 까지는 가능

  const result = new Array(prices.length).fill(0);

  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const chk = prices[i];
      const price = prices[j];

      result[i] += 1;
      if (chk > price) {
        break;
      }
    }
  }

  return result;
}

// 불필요한 연산을 줄인 풀이 -> O(n)
function solution(prices) {
  const n = prices.length;
  const result = new Array(prices.length).fill(0);

  const stack = [0];
  for (let i = 1; i < n; i++) {
    while (prices[i] < prices[stack[stack.length - 1]]) {
      const j = stack.pop();
      result[j] = i - j;
    }
    stack.push(i);
  }

  while (stack.length > 0) {
    const j = stack.pop();
    result[j] = n - j - 1;
  }

  return result;
}
