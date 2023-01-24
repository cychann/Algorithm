function solution(my_string) {
  return my_string
    .split("")
    .filter((s) => !isNaN(+s))
    .map((s) => Number(s))
    .sort();
}
