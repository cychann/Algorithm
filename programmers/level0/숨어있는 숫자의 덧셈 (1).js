function solution(my_string) {
  let sum = 0;
  my_string.split("").map((s) => {
    if (!isNaN(+s)) sum += +s;
  });
  return sum;
}
