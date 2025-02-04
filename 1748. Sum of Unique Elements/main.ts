function sumOfUnique(nums: number[]): number {
    let unique: Record<any, any> = {}
    let result = 0

    for (let val of nums) {
        if (unique[val]) {
            unique[val] += 1
        } else {
            unique[val] = 1
        }

    }

    for (let key in unique) {
        if (unique[key] === 1) {
            result += +key
        }
    }


    return result
};

let num = [1, 2, 3, 2]

console.log(sumOfUnique(num));
