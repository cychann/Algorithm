function solution(clothes) {
  const map = new Map();
  let result = 1;

  clothes.forEach((clothe) => {
    map.set(clothe[1], (map.get(clothe[1]) || 0) + 1);
  });

  for (let [key, value] of map) {
    result *= value + 1;
  }

  return result - 1;
}
