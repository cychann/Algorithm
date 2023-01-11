function solution(my_string) {
  const chk = ["a", "e", "i", "o", "u"];
  return my_string
    .split("")
    .filter((s) => !chk.includes(s))
    .join("");
}
