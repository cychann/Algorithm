/*
자카드 유사도 = 교집합의 크기 / 합집합의 크기
둘 다 공집합이면 -> 자카드 유사도 = 1
두 글자씩 끊어서 다중집합의 원소로 만드는데, 이때 영문자로 된 글자 쌍만 유효. 대문자와 소문자의 차이는 무시함
*/

function isAlpha(char) {
  const code = char.charCodeAt(0);
  return (code >= 65 && code <= 90) || (code >= 97 && code <= 122);
}

function stringToMultiset(str) {
  const result = [];

  for (let i = 0; i < str.length - 1; i++) {
    const pair = str.slice(i, i + 2);

    if (isAlpha(pair[0]) && isAlpha(pair[1])) {
      result.push(pair.toLowerCase());
    }
  }

  return result;
}

function intersection(arr1, arr2) {
  const result = [];
  const copyArr2 = [...arr2];

  for (const n of arr1) {
    const findIdx = copyArr2.indexOf(n);
    if (findIdx !== -1) {
      result.push(n);
      copyArr2.splice(findIdx, 1);
    }
  }

  return result;
}

function union(arr1, arr2) {
  const count1 = new Map();
  const count2 = new Map();
  const result = [];

  for (const item of arr1) {
    count1.set(item, (count1.get(item) || 0) + 1);
  }

  for (const item of arr2) {
    count2.set(item, (count2.get(item) || 0) + 1);
  }

  const allItems = new Set([...arr1, ...arr2]);

  for (const item of allItems) {
    const maxCount = Math.max(count1.get(item) || 0, count2.get(item) || 0);

    for (let i = 0; i < maxCount; i++) {
      result.push(item);
    }
  }

  return result;
}

function solution(str1, str2) {
  const str1Set = stringToMultiset(str1);
  const str2Set = stringToMultiset(str2);

  const intersectionLen = intersection(str1Set, str2Set).length;
  const unionLen = union(str1Set, str2Set).length;

  const jaccard =
    intersectionLen === 0 && unionLen === 0 ? 1 : intersectionLen / unionLen;

  return Math.floor(jaccard * 65536);
}
