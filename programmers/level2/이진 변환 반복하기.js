function solution(s) {
  let answer = [0, 0];
  while (s !== "1") {
    answer[0]++;
    answer[1] += s.split("1").join("").length;
    s = s.split("0").join("").length.toString(2);
  }

  return answer;
}
