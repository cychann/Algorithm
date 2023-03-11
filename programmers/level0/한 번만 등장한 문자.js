function solution(s) {
  let arr = [];

  s.split("").forEach((c) => {
    if (s.indexOf(c) === s.lastIndexOf(c)) {
      arr.push(c);
    }
  });

  return arr.sort().join("");
}
