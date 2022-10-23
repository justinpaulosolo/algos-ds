/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

const arr = [-1, 0, 3, 5, 9, 12];

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1; // init: 5

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(search(arr, 9));
