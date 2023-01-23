function solution(arr) {
  let answer = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    const chk = answer[answer.length - 1];

    if (chk !== arr[i]) answer.push(arr[i]);
  }
  return answer;
}
