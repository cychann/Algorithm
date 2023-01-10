function solution(clothes) {
  let obj = {};
  let answer = 1;

  clothes.forEach((clothe) => {
    const [, kinds] = clothe;
    if (obj[kinds]) {
      obj[kinds]++;
    } else {
      obj[kinds] = 1;
    }
  });
  for (let key in obj) {
    answer *= obj[key] + 1;
  }

  return answer - 1;
}
