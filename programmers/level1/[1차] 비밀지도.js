function solution(n, arr1, arr2) {
  const b1 = arr1.map((num) => num.toString(2).padStart(n, "0"));
  const b2 = arr2.map((num) => num.toString(2).padStart(n, "0"));

  let answer = [];
  for (let i = 0; i < n; i++) {
    let chk = "";
    for (let j = 0; j < n; j++) {
      console.log(b1[i][j], b2[i][j]);
      if (b1[i][j] === "0" && b2[i][j] === "0") chk += " ";
      else chk += "#";
    }

    answer.push(chk);
  }

  return answer;
}
