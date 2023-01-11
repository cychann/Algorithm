function solution(s) {
  let answer = [];
  const formatS = s
    .substring(1, s.length - 2)
    .split("},")
    .map((str) =>
      str
        .substring(1)
        .split(",")
        .map((v) => +v)
    );
  formatS.sort((a, b) => a.length - b.length);

  formatS.map((arr) => {
    arr.forEach((n) => {
      answer.includes(n) || answer.push(n);
    });
  });
  return answer;
}
