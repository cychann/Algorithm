function solution(a, b, n) {
  let answer = 0;

  while (n >= a) {
    let submit = Math.floor(n / a) * a;
    let get = Math.floor(n / a) * b;

    answer += get;
    n = n - submit + get;
  }
  return answer;
}
