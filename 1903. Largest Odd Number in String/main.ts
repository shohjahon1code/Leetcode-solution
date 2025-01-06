function largestOddNumber(num: string): string {
    let lastOddIndex = -1
    for (let i = 0; i < num.length; i++) {
        if (parseInt(num[i]) % 2 !== 0) {
            lastOddIndex = i; 
        }
    }

    if (lastOddIndex != -1) {
        return num.substring(0, lastOddIndex + 1);
    }

    return ''
};


let  num = "52"
console.log(largestOddNumber(num));