// 내 풀이
function solution(participant, completion) {
  let result = "";

  const sortedParticipant = participant.sort();
  const sortedCompletion = completion.sort();

  for (let i = 0; i < completion.length; i++) {
    if (sortedParticipant[i] !== sortedCompletion[i]) {
      result = sortedParticipant[i];
      break;
    }
  }

  return result === ""
    ? sortedParticipant[sortedParticipant.length - 1]
    : result;
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
