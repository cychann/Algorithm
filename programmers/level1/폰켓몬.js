function solution(nums) {
  const select = nums.length / 2;
  const set = new Set([...nums]);
  return set.size >= select ? select : set.size;
}
