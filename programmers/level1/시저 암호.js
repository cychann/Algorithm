function solution(s, n) {
  return s
    .split("")
    .map((char) => {
      if (char !== " ") {
        let charCode = char.charCodeAt();
        if (charCode >= 65 && charCode <= 90) {
          charCode += n;
          if (charCode > 90) charCode -= 26;
        } else {
          charCode += n;
          if (charCode > 122) charCode -= 26;
        }
        return String.fromCharCode(charCode);
      } else return " ";
    })
    .join("");
}
