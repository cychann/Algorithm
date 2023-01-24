function solution(msg) {
  const answer = [];
  const wordObject = {};
  for (let i = 0; i < 26; i++) {
    const word = String.fromCharCode(65 + i);
    wordObject[word] = i + 1;
  }

  let chk = 0;
  while (chk < msg.length) {
    let chkMsg = "";
    while (wordObject[chkMsg + msg[chk]]) {
      chkMsg += msg[chk];
      chk++;
    }
    answer.push(wordObject[chkMsg]);
    const N = Object.keys(wordObject).length;
    wordObject[chkMsg + msg[chk]] = N + 1;
  }
  return answer;
}
