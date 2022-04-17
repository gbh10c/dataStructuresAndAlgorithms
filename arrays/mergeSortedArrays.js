function mergeSortedArrays (arr1, arr2) {
  // CHECK INPUT
  if (!arr1 || !arr2 || typeof arr1 !== 'object' || typeof arr2 !== 'object') {
    return('INVALID INPUT');
  }
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;
  
  // FIRST ATTEMPT
  // let sortedArray = [...arr1];
  // for (let item of arr2) {
  //   sortedArray.push(item);
  // }
  // return sortedArray.sort((a, b) => a - b);


  // SPREAD OPERATOR
  return [...arr1, ...arr2].sort((a,b) => a-b);
}

console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));




// VIDEO EXPLANATION LONG VERSION
// const mergedArray = [];
// let array1Item = arr1[0];
// let array2Item = arr2[0];
// let i = 1;
// let j = 1;

// while (array1Item || array2Item) {
//     if (!array2Item || array1Item < array2Item) {
//       mergedArray.push(array1Item);
//       array1Item = arr1[i];
//       i++;
//     } else {
//       mergedArray.push(array2Item);
//       array2Item = arr2[j];
//       j++;
//     }
//   }