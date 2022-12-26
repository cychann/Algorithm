function solution(n) {
  var answer = 0;
  let tmp = n;
  let nToBin = n.toString(2);
  let numOfOne = 0;
  nToBin.split("").forEach((a) => {
    if (a === "1") numOfOne++;
  });
  while (true) {
    tmp++;
    let tmpToBin = tmp.toString(2);
    let tmpOfOne = 0;
    tmpToBin.split("").forEach((a) => {
      if (a === "1") tmpOfOne++;
    });

    if (numOfOne === tmpOfOne) {
      answer = tmp;
      break;
    }
  }
  return answer;
}
