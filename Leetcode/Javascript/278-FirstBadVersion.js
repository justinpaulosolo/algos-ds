var solution = function (isBadversion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 1;
    let right = n;

    while (left <= right) {
      let mid = Math.floor((left + high) / 2);
      if (isBadversion(mid)) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
    return left;
  };
};
