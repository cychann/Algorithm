// 풀이 1 -> 내가 푼거
// 유저가 신고한 정보 객체 + 신고 당한 정보 객체로 처리
function countSameElement(arr1, arr2) {
  const set2 = new Set([...arr2]);

  const commentElement = arr1.filter((e) => set2.has(e));

  return commentElement.length;
}

function solution(id_list, report, k) {
  // 동일한 유저에 대한 신고 횟수 1회 제한
  // k번 이상 신고된 유저는 정지 -> 해당 유저를 신고한 모든 유저에게 메일 발송

  const reportObj = {};
  const reportedObj = {};

  for (const id of id_list) {
    reportObj[id] = [];
    reportedObj[id] = 0;
  }

  for (const r of report) {
    const [a, b] = r.split(" ");
    const existeTest = reportObj[a].some((id) => id === b);

    if (!existeTest) {
      reportObj[a].push(b);
      reportedObj[b] += 1;
    }
  }

  const pasuedUser = Object.keys(reportedObj).filter(
    (key) => reportedObj[key] >= k
  );

  return id_list.map((id) => {
    const reportChk = reportObj[id];

    return countSameElement(reportChk, pasuedUser);
  });
}

// 풀이2
// 신고 당한 유저 : 신고 한 유저 (key:value) 값으로 처리 후 -> count 객체에 카운팅.
function solution(id_list, report, k) {
  const reportedUser = {};
  const count = {};

  for (const r of report) {
    const [userId, reportedId] = r.split(" ");
    if (reportedUser[reportedId] === undefined) {
      reportedUser[reportedId] = new Set();
    }

    reportedUser[reportedId].add(userId);
  }

  for (const reportedId of Object.keys(reportedUser)) {
    if (reportedUser[reportedId].size >= k) {
      for (const uid of reportedUser[reportedId]) {
        count[uid] = (count[uid] || 0) + 1;
      }
    }
  }

  const answer = [];
  for (let i = 0; i < id_list.length; i++) {
    answer.push(count[id_list[i]] || 0);
  }

  return answer;
}
