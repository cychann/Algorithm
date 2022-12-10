function solution(array, n) {
  var answer = 0;
  array.forEach((num) => {
    if (num === n) answer++;
  });
  return answer;
}
