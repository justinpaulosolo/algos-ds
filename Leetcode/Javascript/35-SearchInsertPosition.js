let arr = [1, 3, 5, 6];

var searchInsert = function (nums, target) {
  let l = 0;
  let r = nums.length - 1;

  while (l <= r) {
    let m = Math.floor((l + r) / 2);

    if (nums[m] === target) {
      return m;
    } else if (nums[m] < target) {
      l = m + 1;
    } else {
      r = m - 1;
    }
  }
  return l;
};

console.log(searchInsert(arr, 5));
console.log(searchInsert(arr, 2));
