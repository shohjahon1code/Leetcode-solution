function canConstruct(s: string, k: number): boolean {
    const charCount: Record<string, number> = {};


    for (const char of s) {
        if (!charCount[char]) {
            charCount[char] = 0;
        }
        charCount[char] += 1
    }

    let oddCount = 0
    for (let count of Object.values(charCount)) {
        if (count % 2 !== 0) {
            oddCount += 1
        }
    }

    return oddCount <= k

};

let s = "annabelle", k = 2
console.log(canConstruct(s, k));
