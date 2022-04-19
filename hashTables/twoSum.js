const twoSum = function(nums, target) {
  const map = {};
  for(let i = 0; i < nums.length; i++) {
    let element = nums[i]; //active number in the array
    let complement = target - element; //opposite of number in array
    if(map[complement] !== undefined) { //map[complement] gives index ('key' in the object) of complement IF it is in the array
      return [map[complement], i]; //returns the index ('key') of the complement, as well as the i
    }
    map[element] = i; //assigns the element (number from array) to 'key' i in the object
  }
  return [];
};

console.log(twoSum([1,2,7,11,15], 9));


// i, map[element], map[complement], map THROUGH THE FOR LOOP
// 0 0 undefined { '1': 0 }
// 1 1 undefined { '1': 0, '2': 1 }
// 2 2 1 { '1': 0, '2': 1, '7': 2 }
// 3 3 undefined { '1': 0, '2': 1, '7': 2, '11': 3 }
// 4 4 undefined { '1': 0, '2': 1, '7': 2, '11': 3, '15': 4 }