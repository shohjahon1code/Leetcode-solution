function intersection(nums: number[][]): number[] {
    const freq: { [key: number]: number } = {}

    for (let arr of nums) {
        let uniquNumbers = new Set(arr)
        for (let num of uniquNumbers) {
            if (freq[num]) {
                freq[num] += 1
            } else {
                freq[num] = 1
            }
        }
    }
    const result: number[] = []

    for (let num in freq) {
        if (freq[num] === nums.length) {
            result.push(Number(num))
        }
    }


    return result

};

let nums = [[3, 1, 2, 4, 5], [1, 2, 3, 4], [3, 4, 5, 6]]

console.log(intersection(nums));
