/**
 * @param {number[]} nums
 * @return {number[]}
 */
let nums = [-4, -1, 0, 3, 10];
var sortedSquares = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr.push(nums[i] * nums[i]);
  }
  return arr.sort((a, b) => a - b);
};

let arr = sortedSquares(nums);
console.log(arr);
