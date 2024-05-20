// 내 풀이
function solution(nums) {
  const map = new Map();

  nums.forEach((num) => {
    map.set(num, map.get(num) + 1 || 1);
  });

  return Math.min(nums.length / 2, map.size);
}

// 더 간결해보이는 코드
function solution(nums) {
  const select = nums.length / 2;
  const set = new Set([...nums]);
  return set.size >= select ? select : set.size;
}
