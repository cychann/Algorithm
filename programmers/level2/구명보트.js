function solution(people, limit) {
  people.sort((a, b) => b - a);
  let cnt = 0;
  let start = 0;
  let end = people.length - 1;

  while (start < end) {
    if (people[start] + people[end] <= limit) {
      start++;
      end--;
    } else {
      start++;
    }
    cnt++;

    if (start === end) cnt++;
  }
  return cnt;
}
