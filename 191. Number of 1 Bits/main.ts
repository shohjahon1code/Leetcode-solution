function hammingWeight(n: number): number {
     let result = 0
    while(n !== 0) {
        result += n & 1
        n = n >> 1
    }

    return result
};

let  n = 11

console.log(hammingWeight(n));