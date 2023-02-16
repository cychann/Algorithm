function solution(num_list, n) {
  let answer = [];

  for (let i = n; i <= num_list.length; i += n) {
    answer.push(num_list.slice(i - n, i));
  }

  return answer;
}
