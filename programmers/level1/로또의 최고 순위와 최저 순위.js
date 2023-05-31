function solution(lottos, win_nums) {
  const map = new Map();
  map.set(0, 6);
  map.set(1, 6);
  map.set(2, 5);
  map.set(3, 4);
  map.set(4, 3);
  map.set(5, 2);
  map.set(6, 1);

  const result = [0, 0];

  lottos.forEach((lotto) => {
    if (win_nums.includes(lotto)) {
      result[0]++;
      result[1]++;
    }
    if (lotto === 0) {
      result[0]++;
    }
  });

  return result.map((n) => map.get(n));

  // 다른 사람의 유용한 풀이 ...
  //     const rank = [6, 6, 5, 4, 3, 2, 1];

  //     let minCount = lottos.filter(v => win_nums.includes(v)).length;
  //     let zeroCount = lottos.filter(v => !v).length;

  //     const maxCount = minCount + zeroCount;

  //     return [rank[maxCount], rank[minCount]];
}
