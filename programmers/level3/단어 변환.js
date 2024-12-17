/*
최소 단계 -> bfs
단어가 하나만 다른지 확인하는 로직이 필요
*/

function isConvertibleString(a, b) {
  let N = a.length;
  let cnt = 0;

  for (let i = 0; i < N; i++) {
    if (a[i] !== b[i]) {
      cnt++;
    }
  }

  return cnt === 1;
}

function solution(begin, target, words) {
  const N = words.length;
  const visited = Array(N).fill(false);
  const queue = [[begin, 0]];

  while (queue.length > 0) {
    const [chkWord, count] = queue.shift();

    if (chkWord === target) {
      return count;
    }

    for (const word of words) {
      const wordIdx = words.indexOf(word);
      if (isConvertibleString(chkWord, word) && !visited[wordIdx]) {
        queue.push([word, count + 1]);
        visited[wordIdx] = true;
      }
    }
  }

  return 0;
}
