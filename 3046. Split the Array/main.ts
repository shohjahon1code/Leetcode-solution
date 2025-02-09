function isPossibleToSplit(nums: number[]): boolean {
    let totalSum = nums.reduce((sum, num) => sum + num, 0);

    if (totalSum % 2 !== 0) return false;
    let target = totalSum / 2;
    let currentSum = 0;

    nums.sort((a, b) => b - a);

    for (let num of nums) {
        if (currentSum + num <= target) {
            currentSum += num;
        }
        if (currentSum === target) return true;
    }

    return false
};

let nums = [1, 1, 2, 2, 3, 4]

console.log(isPossibleToSplit(nums));
