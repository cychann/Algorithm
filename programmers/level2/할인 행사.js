function solution(want, number, discount) {
  let result = 0;
  let wantArr = [];
  for (let i = 0; i < want.length; i++) {
    for (let j = 0; j < number[i]; j++) {
      wantArr.push(want[i]);
    }
  }

  wantArr.sort();

  const equals = (a, b) =>
    a.length === b.length && a.every((v, i) => v === b[i]);

  let idx = 0;
  while (idx + 10 <= discount.length) {
    let tmpDisCount = discount.slice(idx, idx + 10).sort();
    if (equals(tmpDisCount, wantArr)) {
      result++;
    }

    idx++;
  }

  return result;
}
