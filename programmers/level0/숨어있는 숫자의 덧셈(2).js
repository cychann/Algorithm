function solution(my_string) {
  let answer = 0;

  for (let i = 0; i < my_string.length; i++) {
    let tmp = "";
    while (!isNaN(my_string[i])) {
      tmp += my_string[i];
      i++;
    }
    answer += +tmp;
  }

  return answer;
}
