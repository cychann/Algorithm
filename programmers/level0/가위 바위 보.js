function solution(rsp) {
  return rsp
    .split("")
    .map((chk) => {
      if (chk === "2") return "0";
      if (chk === "0") return "5";
      if (chk === "5") return "2";
    })
    .join("");
}
