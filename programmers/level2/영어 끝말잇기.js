function solution(n, words) {
  let answer = [0, 0];
  let chkArr = [words[0]];
  let chk = words[0];
  let turn = 1;
  for (let i = 1; i < words.length; i++) {
    let word = words[i];
    const player = (i % n) + 1;

    if (chk[chk.length - 1] !== word[0] || chkArr.indexOf(word) !== -1) {
      return [player, turn];
      break;
    }

    chk = word;
    chkArr.push(word);

    if (player === n) turn += 1;
  }
  return [0, 0];
}

// sol2
function solution(n, words) {
  const wordLen = words.length;
  const wordSet = new Set();
  let last = words[0][0];

  for (let i = 0; i < wordLen; i++) {
    const word = words[i];
    if (wordSet.has(word) || last !== word[0]) {
      return [(i % n) + 1, Math.floor(i / n) + 1];
    }

    last = word.slice(-1);
    wordSet.add(word);
  }

  return [0, 0];
}
