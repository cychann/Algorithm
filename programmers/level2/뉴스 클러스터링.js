function solution(str1, str2) {
  let answer = 1;
  str1 = str1.toUpperCase();
  str2 = str2.toUpperCase();
  const arr1 = [];
  const arr2 = [];

  for (let i = 0; i < str1.length - 1; i++) {
    const str = str1.substr(i, 2);
    if (str[0] >= "A" && str[0] <= "Z" && str[1] >= "A" && str[1] <= "Z") {
      arr1.push(str);
    }
  }
  for (let i = 0; i < str2.length - 1; i++) {
    const str = str2.substr(i, 2);
    if (str[0] >= "A" && str[0] <= "Z" && str[1] >= "A" && str[1] <= "Z") {
      arr2.push(str);
    }
  }
  console.log(arr1, arr2);

  var union = [];
  var intersect = [];

  for (var i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) >= 0) {
      intersect.push(arr1.splice(arr1.indexOf(arr2[i]), 1));
    }
    union.push(arr2[i]);
  }

  for (var i = 0; i < arr1.length; i++) {
    union.push(arr1[i]);
  }

  if (union.length === 0) {
    answer = 65536;
  } else {
    answer = Math.floor((intersect.length / union.length) * 65536);
  }

  return answer;
}
