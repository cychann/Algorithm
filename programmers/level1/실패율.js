function solution(N, stages) {
  let arr = [];
  let chk = stages.length;

  for (let i = 1; i <= N; i++) {
    let currStage = stages.filter((n) => n === i).length;
    arr.push([i, currStage / chk]);
    chk -= currStage;
  }

  arr.sort((a, b) => b[1] - a[1]);
  return arr.map((x) => x[0]);
}
