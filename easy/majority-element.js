// https://leetcode.com/problems/majority-element/description/

function majorityElement(nums) {
  const majorityMap = {};
  for (let i = 0, len = nums.length; i < len; i++) {
    const data = nums[i];
    majorityMap[data] = majorityMap[data] || 0;
    majorityMap[data]++;
    if (majorityMap[data] > Math.floor(len / 2)) {
      return data;
    }
  }

}
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]))