function solution(array, n) {
  array.sort((a, b) => a - b);
  const absArr = array.map((v) => Math.abs(v - n));
  return array[absArr.indexOf(Math.min(...absArr))];
}
