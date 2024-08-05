function solution(participant, completion) {
  /*
  단 한명의 선수를 제외하고 모두 완주
  동명이인이 있음
  */
  const map = new Map();

  participant.forEach((p) => {
    map.set(p, map.has(p) ? map.get(p) + 1 : 1);
  });

  completion.forEach((c) => {
    map.set(c, map.has(c) ? map.get(c) - 1 : 0);
  });

  for (const [key, value] of map) {
    if (value === 1) return key;
  }
}

// 다른 좋은 풀이 (해시를 이용)
function solution(participant, completion) {
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }

  // 이렇게 하면 시간 초과가 안나는데,
  for (let [k, v] of map) {
    if (v > 0) return k;
  }

  // // 이렇게 하면 시간 초과가 발생함.
  // return Array.from(map.keys())[0]

  return "nothing";
}
