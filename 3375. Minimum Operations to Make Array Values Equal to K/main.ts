function moveZeroes(nums: number[]): number[] {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      j++;
    }
  }

  return nums;
}

// Example usage:
const nums = [2, 0, 3, 4, 0, 5];

const result = moveZeroes(nums);
console.log(result); // Output: [1, 3, 12, 0, 0]
