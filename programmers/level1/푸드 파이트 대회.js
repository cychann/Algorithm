function solution(food) {
  let result = "";
  let f = food.map((n, i) => Math.floor(n / 2));

  for (let i = 1; i < f.length; i++) {
    result += (i + "").repeat(f[i]);
  }
  result += "0";

  for (let i = f.length; i > 0; i--) {
    result += (i + "").repeat(f[i]);
  }

  return result;
}
