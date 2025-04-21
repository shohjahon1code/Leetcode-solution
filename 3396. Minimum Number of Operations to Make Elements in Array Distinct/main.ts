function minimumOperations(nums: number[]): number {
  let operation = 0;
  while (new Set(nums).size !== nums.length) {
    nums.splice(0, 3);
    operation++;
  }
  return operation;
}

let nums = [1, 2, 3, 4, 2, 3, 3, 5, 7];
let result = minimumOperations(nums);
console.log(result); // Output: 2
