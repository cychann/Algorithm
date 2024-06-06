function solution(arr) {
  const result = [];

  arr.forEach((n) => {
    if (result[result.length - 1] !== n) {
      result.push(n);
    }
  });

  return result;
}

// 다른 풀이

function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}
