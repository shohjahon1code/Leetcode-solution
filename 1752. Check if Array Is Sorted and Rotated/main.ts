function check(nums: number[]): boolean {
    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            count++;
        }
    }

    if (nums[n - 1] > nums[0]) {
        count++;
    }

    return count <= 1;
};


let nums = [3, 4, 5, 1, 2]
console.log(check(nums));
