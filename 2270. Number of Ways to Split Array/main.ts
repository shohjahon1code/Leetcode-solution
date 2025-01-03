function waysToSplitArray(nums: number[]): number {
    const n = nums.length;
    const totalSum = nums.reduce((sum, num) => sum + num, 0);
    let leftSum = 0
    let countValidSplit = 0

    for (let i = 0; i < n - 1; i++) {
        leftSum += nums[i]
        let rigthSum = totalSum - leftSum

        if(leftSum > rigthSum){
            countValidSplit++;
        }
    }

    return countValidSplit
};

let nums = [10, 4, -8, 7]
console.log(waysToSplitArray(nums));