function areOccurrencesEqual(s: string): boolean {
    let frequencyObj: Record<string, number> = {}

    for (let char of s) {
        if (!frequencyObj[char]) {
            frequencyObj[char] = 1
        } else {
            frequencyObj[char] += 1
        }
    }

    let frequency = Object.values(frequencyObj)

    return frequency.every((freq: number) => freq === frequency[0]);
};
