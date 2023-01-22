function solution(cipher, code) {
  return cipher
    .split("")
    .filter((c, idx) => (idx + 1) % code === 0)
    .join("");
}
