function solution(my_string) {
  let answer = "";

  [...my_string].forEach((str) => {
    if (!answer.includes(str)) answer += str;
  });

  return answer;
}
