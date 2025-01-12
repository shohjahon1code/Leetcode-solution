function reverseBits(n: number): number {
    let result = 0;

    for (let i = 0; i < 32; i++) {
        const lastBit = n & 1;

        result = result << 1;

        result = result | lastBit;

        n = n >> 1;
    }

    return result >>> 0;
}

let n = 0b00000010100101000001111010011100;
console.log(reverseBits(n)); 
