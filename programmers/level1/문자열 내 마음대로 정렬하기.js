function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (b[n] > a[n]) return -1;
    if (a[n] === b[n]) {
      if (a > b) return 1;
      else if (b > a) return -1;
      return 0;
    }
    a;
  });
}
