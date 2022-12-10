function solution(array, height) {
  var answer = 0;
  array.sort((a, b) => {
    return b - a;
  });
  array.forEach((n) => {
    if (n > height) answer++;
  });
  return answer;
}
