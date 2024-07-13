function solution(answers) {
  // 각 삼인방의 패턴 분석
  // 시험은 최대 10,00문제

  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  // answers의 배열을 순회 -> 각 삼인방을 순회할때, 패턴의 길이에 해당하는 값을 나머지로 처리해서 비교하도록 연산

  const result = [0, 0, 0];

  for (let i = 0; i < patterns.length; i++) {
    const patternLen = patterns[i].length;
    for (let j = 0; j < answers.length; j++) {
      const chkIdx = j % patternLen;

      if (answers[j] === patterns[i][chkIdx]) {
        result[i]++;
      }
    }
  }

  const maxResult = Math.max(...result);

  return result
    .map((n, idx) => {
      if (n === maxResult) {
        return idx + 1;
      }
    })
    .filter((n) => n);
}

/* 
다른 풀이
*/

function solution(answers) {
  const patterns = [
    [1, 2, 3, 4, 5],
    [2, 1, 2, 3, 2, 4, 2, 5],
    [3, 3, 1, 1, 2, 2, 4, 4, 5, 5],
  ];

  const result = [0, 0, 0];

  for (const [i, answer] of answers.entries()) {
    for (const [j, pattern] of patterns.entries()) {
      if (answer === pattern[i % pattern.length]) {
        result[j] += 1;
      }
    }
  }

  const maxScore = Math.max(...result);

  const scoreArr = [];
  for (let i = 0; i < result.length; i++) {
    if (maxScore === result[i]) {
      scoreArr.push(i + 1);
    }
  }

  return scoreArr;
}
