/* 내 풀이 */

function solution(N, stages) {
  // stages의 길이는 최대 200,000 -> O(Nlogn)
  // stage에 도달했한 사용자가 몇명인지 + 몇명이 머물러 있는지

  const reachedStage = [];
  const stayStage = [];

  for (let i = 1; i <= N; i++) {
    const reachedCnt = stages.filter((stage) => stage >= i).length;
    const stayStageCnt = stages.filter((stage) => stage === i).length;
    reachedStage.push(reachedCnt);
    stayStage.push(stayStageCnt);
  }

  const failPercent = [];

  for (let i = 0; i < N; i++) {
    failPercent.push(stayStage[i] / reachedStage[i]);
  }

  const failIdx = failPercent.map((percent, idx) => idx + 1);

  return failIdx.sort((a, b) => failPercent[b - 1] - failPercent[a - 1]);
}

/* 나와 같은 방식으로 접근했는데, 더 효율적으로 풀이한 사람 */
function solution(N, stages) {
  const result = [];

  for (let i = 1; i <= N; i++) {
    const reachedCnt = stages.filter((stage) => stage >= i).length;
    const stayStageCnt = stages.filter((stage) => stage === i).length;
    result.push([i, stayStageCnt / reachedCnt]);
  }

  result.sort((a, b) => b[1] - a[1]);

  return result.map((r) => r[0]);
}

/* 저자의 풀이 */
function solution(N, stages) {
  // TODO 1. 스테이지별 도전자 수를 구함
  const challenger = new Array(N + 2).fill(0);
  for (const stage of stages) {
    challenger[stage] += 1;
  }
  console.log(challenger);
  // TODO 2. 각 스테이지를 순회하며, 스테이지별 실패율 계산
  const fails = {};
  let total = stages.length;

  for (let i = 1; i <= N; i++) {
    if (challenger[i] === 0) {
      fails[i] = 0;
    }

    fails[i] = challenger[i] / total;

    // TODO 3. 다음 스테이지의 실패율을 구할 때, 현재 스테이지의 인원을 뺌 -> 다음 스테이지 도달하지 못했으므로
    total -= challenger[i];
  }

  // TODO 4. 정렬 후 번호만 반환
  const result = Object.entries(fails).sort((a, b) => b[1] - a[1]);

  return result.map((v) => Number(v[0]));
}
