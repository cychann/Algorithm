function solution(answers) {
  const answer = [];
  const a1 = [1, 2, 3, 4, 5];
  const a2 = [2, 1, 2, 3, 2, 4, 2, 5];
  const a3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const a1c = answers.filter((a, i) => a === a1[i % a1.length]).length;
  const a2c = answers.filter((a, i) => a === a2[i % a2.length]).length;
  const a3c = answers.filter((a, i) => a === a3[i % a3.length]).length;
  const max = Math.max(a1c, a2c, a3c);

  if (max === a1c) answer.push(1);
  if (max === a2c) answer.push(2);
  if (max === a3c) answer.push(3);

  return answer;
}
