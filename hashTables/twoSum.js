const twoSum = function(nums, target) {
  const map = {};
  for(let i = 0; i < nums.length; i++) {
    let element = nums[i];
    let complement = target - element;
    if(map[complement] !== undefined) {
      return [map[complement], i];
    }
    map[element] = i;
  }
  return [];
};

console.log(twoSum([1,2,7,11,15], 9));