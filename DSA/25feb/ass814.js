let nums = [1,3,5,6];
let target = 7;
let searchInsert = function (nums, target) {

    for (let index = 0; index < nums.length; index++) {
      if (target <= nums[index]) {
          
        return index;
      }
    }
    return nums.length;
  };
  document.write("ANSWER is "+ searchInsert (nums ));