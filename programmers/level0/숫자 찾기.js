function solution(num, k) {
  let result = -1;
  let numToStr = (num + "").split("");
  k = k.toString();
  if (numToStr.includes(k)) result = numToStr.indexOf(k) + 1;

  return result;
}
