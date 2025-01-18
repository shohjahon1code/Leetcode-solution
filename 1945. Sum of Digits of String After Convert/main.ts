function getLucky(s: string, k: number): number {
    let result: number[] = []

    for (let v of s) {
        let pos = findCharPostion(v)
        result.push(...pos.toString().split('').map(Number));
        
    }

    for (let i = 0; i < k; i++) {
        result = transform(result);
        
    }

    return Number(result.join(''));
};

let sec = "iiii", k = 1

console.log(getLucky(sec, k));


function findCharPostion(letter: string): number {
    let postion_letter = letter.charCodeAt(0) - 'a'.charCodeAt(0) + 1

    return postion_letter
}

function transform(num: number[]) {
    const sum = num.reduce((a, b) => a + b, 0);
    return sum.toString().split('').map(Number);
}