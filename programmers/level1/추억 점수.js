function solution(name, yearning, photo) {
  return photo.map((arr) => {
    let result = 0;
    arr.forEach((p) => {
      if (name.indexOf(p) !== -1) {
        result += yearning[name.indexOf(p)];
      }
    });
    return result;
  });
}
