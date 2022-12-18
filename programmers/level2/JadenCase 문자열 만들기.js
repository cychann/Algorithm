function solution(s) {
  var answer = "";
  const words = s.split(" ").map((word) => {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
  });
  answer = words.join(" ");
  return answer;
}
