function solution(n, lost, reserve) {
  let realLost = lost.filter((l) => !reserve.includes(l));
  let realReserve = reserve.filter((r) => !lost.includes(r));
  let chk = n - realLost.length;
  realLost.sort((a, b) => a - b);

  realLost.forEach((p) => {
    if (realReserve.includes(p - 1)) {
      realReserve.splice(realReserve.indexOf(p - 1), 1);
      chk++;
    } else if (realReserve.includes(p + 1)) {
      realReserve.splice(realReserve.indexOf(p + 1), 1);
      chk++;
    }
  });
  return chk;
}
