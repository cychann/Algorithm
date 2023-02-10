function solution(files) {
  let arr = [];
  files.forEach((file) => {
    let chk = false;
    let head = "";
    let number = "";
    let tail = "";
    [...file].some((f, i) => {
      if (number.length === 5) {
        tail = file.slice(i);
        return true;
      } else {
        if (!isNaN(+f) && f !== " ") {
          if (!chk && !head) head = file.slice(0, i);
          chk = true;
          number += f;
        }
        if (isNaN(+f) || f === " ") {
          if (chk && !tail) {
            tail = file.slice(i);
            return true;
          }
          chk = false;
        }
      }
    });
    arr.push({ head, number, tail });
  });

  arr.sort((a, b) => {
    if (a.head.toLowerCase() < b.head.toLowerCase()) return -1;
    if (a.head.toLowerCase() > b.head.toLowerCase()) return 1;

    if (a.head.toLowerCase() === b.head.toLowerCase()) {
      if (+a.number < +b.number) return -1;
      if (+a.number > +b.number) return 1;
    }
  });
  return arr.map((file) => file.head + file.number + file.tail);
}
