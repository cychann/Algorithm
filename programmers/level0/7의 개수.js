function solution(array) {
  let answer = 0;

  array.forEach((n) => {
    n.toString()
      .split("")
      .forEach((c) => {
        if (c === "7") answer++;
      });
  });

  return answer;

  // return array.join('').split('7').length-1;
}
