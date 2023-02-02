function solution(my_string, num1, num2) {
  const str = [...my_string];
  str.splice(num1, 1, my_string[num2]);
  str.splice(num2, 1, my_string[num1]);
  return str.join("");
}
