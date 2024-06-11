function solution(prices) {
  const answer = [];
  for (let i = 0; i < prices.length; i++) {
    let chk = 0;
    for (let j = i + 1; j < prices.length; j++) {
      chk++;
      if (prices[i] > prices[j]) break;
    }
    answer.push(chk);
  }

  return answer;
}
