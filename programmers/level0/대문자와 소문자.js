function solution(my_string) {
  return my_string
    .split("")
    .map((s) => {
      if (s === s.toUpperCase()) {
        return s.toLowerCase();
      } else return s.toUpperCase();
    })
    .join("");
}
