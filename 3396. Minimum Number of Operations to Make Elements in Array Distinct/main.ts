function minimumOperations(nums: number[]): number {
  let operation = 0;
  let numSet = new Set<number>();
  for (let i = 0; i < nums.length; i++) {
    if (numSet.has(nums[i])) {
      operation++;
      while (numSet.has(nums[i])) {
        nums[i]++;
      }
    }
    numSet.add(nums[i]);
  }
  return operation;
}

let nums = [1, 2, 3, 4, 2, 3, 3, 5, 7];
let result = minimumOperations(nums);
console.log(result); // Output: 5
