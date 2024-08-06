// 풀이 1
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

// 풀이 2 (2024.08.06)
function solution(record) {
  const obj = {};
  const result = [];

  for (const r of record) {
    const [cmd, userId, userName] = r.split(" ");

    if (cmd === "Enter" || cmd === "Leave") {
      result.push(`${cmd} ${userId}`);
    }

    if (userName) {
      obj[userId] = userName;
    }
  }

  return result.map((r) => {
    const [cmd, userId] = r.split(" ");

    if (cmd === "Enter") {
      return `${obj[userId]}님이 들어왔습니다.`;
    }

    if (cmd === "Leave") {
      return `${obj[userId]}님이 나갔습니다.`;
    }
  });
}
