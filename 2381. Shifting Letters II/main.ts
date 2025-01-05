function shiftingLetters(s: string, shifts: number[][]): string {
    let n = s.length
    let difArr = new Array(n + 1).fill(0)

    for (const [start, end, direction] of shifts) {
        if (direction === 1) {
            difArr[start] += 1;     
            difArr[end + 1] -= 1;   
        } else {
            difArr[start] -= 1;     
            difArr[end + 1] += 1;
        }
    }

    let prefixSum = 0;
    let result = '';


    for (let i = 0; i < n; i++) {
        prefixSum += difArr[i]

        let code = s.charCodeAt(i) - 'a'.charCodeAt(0);
        console.log(code);
        
        let newCode = ((code + prefixSum) % 26 + 26) % 26;

        result += String.fromCharCode(newCode + 'a'.charCodeAt(0));
    }

    return result
};

let s = "abc", shifts = [[0,1,0],[1,2,1],[0,2,1]]

console.log(shiftingLetters(s, shifts));