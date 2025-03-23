function arrayPairSum(nums: number[]): number {
    let sum = 0;
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i ++) {
        if(i % 2 == 0){
            sum += nums[i]
        }
    }

    return sum
};

let nums = [1, 4, 3, 2]
console.log(arrayPairSum(nums));
