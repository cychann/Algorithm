function solution(age) {
  return ("" + age)
    .split("")
    .map((n) => String.fromCharCode(+n + 97))
    .join("");
}
