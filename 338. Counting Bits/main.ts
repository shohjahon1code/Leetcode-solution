function countBits(n: number): number[] {
    let result:number[] = []

    for(let i = 0; i <= n; i++) {
        let bit = i.toString(2)
        let point = 0
        for(let j = 0; j < bit.length; j++) {
            point += Number(bit[j])
        }
        result.push(point)
    }

    return result
};

let ns = 2

console.log(countBits(ns));