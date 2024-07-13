function solution(arr1, arr2) {
  const result = [];

  const a1Len = arr1.length;
  const c1Len = arr1[0].length;
  const a2Len = arr2.length;
  const c2Len = arr2[0].length;

  for (let i = 0; i < a1Len; i++) {
    result.push(new Array(c2Len).fill(0));
  }

  for (let i = 0; i < a1Len; i++) {
    for (let j = 0; j < c2Len; j++) {
      for (let k = 0; k < c1Len; k++) {
        result[i][j] += arr1[i][k] * arr2[k][j];
      }
    }
  }

  return result;
}
