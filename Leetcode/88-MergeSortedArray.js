/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  while (n > 0) {
    if (nums1[m - 1] > nums2[n - 1]) {
      nums1[n + m - 1] = nums1[m - 1];
      m--;
    } else {
      nums1[n + m - 1] = nums2[n - 1];
      n--;
    }
  }
  return nums1;
};

let nums1 = [1, 2, 3, 0, 0, 0];
let m = 3;
let nums = 2;
let nums2 = [1, 2, 5];
let n = 3;
let arr = merge(nums1, m, nums2, n);
console.log(arr);
