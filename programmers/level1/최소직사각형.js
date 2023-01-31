function solution(sizes) {
  let max = 0;
  let min = 0;

  sizes.map((arr) => {
    max = Math.max(Math.max(...arr), max);
    min = Math.max(Math.min(...arr), min);
  });
  return min * max;
}
