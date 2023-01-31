function solution(record) {
  const obj = {};
  let answer = [];

  record.forEach((s) => {
    const [command, userId, nickname] = s.split(" ");
    if (command === "Enter" || command === "Change") {
      obj[userId] = nickname;
    }
  });

  return record.reduce((result, s) => {
    const [command, userId, nickname] = s.split(" ");
    if (command === "Enter") {
      result.push(`${obj[userId]}님이 들어왔습니다.`);
    } else if (command === "Leave") {
      result.push(`${obj[userId]}님이 나갔습니다.`);
    }
    return result;
  }, []);
}
