function solution(arr) {
  return arr.filter((n, i) => {
    return n !== arr[i + 1];
  });
}
