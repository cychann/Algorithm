function solution(skill, skill_trees) {
  let answer = 0;
  let arr = [];
  skill_trees.forEach((skill_tree) => {
    let chk = skill;
    let tmp = "";
    skill_tree.split("").forEach((c) => {
      if (chk[0] === c) {
        chk = chk.substr(1);
      } else tmp += c;
    });
    arr.push(tmp);
  });

  arr.forEach((skill_tree) => {
    let chk = false;
    skill.split("").forEach((c) => {
      if (skill_tree.includes(c)) {
        chk = true;
      }
    });
    if (!chk) answer++;
  });

  return answer;
}
