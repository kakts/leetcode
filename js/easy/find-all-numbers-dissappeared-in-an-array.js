// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/description/
function findDisappearedNumbers(nums) {
  let map = {};
  const len = nums.length;
  for (let i = 0;i < len; i++) {
    map[nums[i]] = true;
  }

  let result = [];
  for (let j = 1; j <= len; j++) {
    if (!map[j]) {
      result.push(j)
    }
  }
  console.log(map)
  return result;
}

console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));
