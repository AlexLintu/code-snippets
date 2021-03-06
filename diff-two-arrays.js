function diffArray(arr1, arr2) {
  return arr1.filter(element => !arr2.includes(element)).concat(arr2.filter(element => !arr1.includes(element)))
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // Returns [4]

// Method: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes
