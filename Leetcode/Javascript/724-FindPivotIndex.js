/**
 * @param {number[]} nums
 * @return {number[]}
 */

let arr = [1, 7, 3, 6, 5, 6];

var pivotIndex = function (nums) {
  let sum = 0;
  let left = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }

  for (let i = 0; i < nums.length; i++) {
    let right = sum - left - nums[i];

    if (right === left) return i;
    left += nums[i];
  }
  return 0;
};

console.log(pivotIndex(arr));
