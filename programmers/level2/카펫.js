function solution(brown, yellow) {
  const totalSpace = brown + yellow;

  for (let i = Math.floor(totalSpace / 2); i > 0; i--) {
    if (totalSpace % i !== 0) continue;

    const width = i;
    const height = totalSpace / i;

    if ((width - 2) * (height - 2) === yellow) {
      return [width, height];
    }
  }
}
