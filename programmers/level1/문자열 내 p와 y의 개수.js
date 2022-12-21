function solution(s) {
  let chkArr = {};

  s.toLowerCase()
    .split("")
    .forEach((ch) => {
      if (!chkArr[ch]) chkArr[ch] = 0;
      chkArr[ch]++;
    });
  return chkArr["p"] === chkArr["y"] ? true : false;
}

// 더 좋은 방법...
function numPY(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}
