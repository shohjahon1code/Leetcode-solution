function wordSubsets(words1: string[], words2: string[]): string[] {
    const maxRequirements: Record<string, number> = {};

    for (const word of words2) {
        const wordCount: Record<string, number> = {};
        for (const char of word) {
            wordCount[char] = (wordCount[char] || 0) + 1;
        }

        for (const char in wordCount) {
            maxRequirements[char] = Math.max(maxRequirements[char] || 0, wordCount[char]);
        }
    }

    // for (const word of maxRequirements)
    const result: string[] = [];
    for (const word of words1) {
        const wordCount: Record<string, number> = {};
        for (const char of word) {
            wordCount[char] = (wordCount[char] || 0) + 1;
        }

        let isUniversal = true;
        for (const char in maxRequirements) {
            if ((wordCount[char] || 0) < maxRequirements[char]) {
                isUniversal = false;
                break;
            }
        }

        if (isUniversal) {
            result.push(word);
        }
    }

    return result
};

let words1 = ["amazon", "apple", "facebook", "google", "leetcode"], words2 = ["e", "o"]

console.log(wordSubsets(words1, words2));