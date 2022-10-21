const nums = [1, 2, 3];
var containsDuplicate = function (nums) {
  let temp = 0;

  for (let i = 0; i < nums.length; i++) {
    temp = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] === temp) {
        return true;
      }
    }
  }
  return false;
};
console.log(containsDuplicate(nums));
