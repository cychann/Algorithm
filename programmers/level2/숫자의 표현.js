function solution(n) {
  let answer = 0;
  for (let i = 1; i < n; i++) {
    let tmp = i;
    for (let j = i + 1; j < n; j++) {
      tmp += j;
      if (tmp === n) answer++;
      else if (tmp > n) break;
    }
  }
  return answer + 1;

  //   for(let i = 0; i <= n; i++) {
  //   	if(n%i === 0 && i%2 === 1) answer++;
  //   }

  //   return answer;
}
