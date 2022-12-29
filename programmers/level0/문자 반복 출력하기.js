function solution(my_string, n) {
  return my_string
    .split("")
    .map((str) => str.repeat(n))
    .join("");
}
