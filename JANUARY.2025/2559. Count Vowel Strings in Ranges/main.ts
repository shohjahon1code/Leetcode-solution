function vowelStrings(words: string[], queries: number[][]): number[] {

    const cumulativeCounts = preprocessWords(words);
    
    return queries.map(([start, end]) => cumulativeCounts[end + 1] - cumulativeCounts[start]);
};

let  words = ["aba","bcb","ece","aa","e"], queries = [[0,2],[1,4],[1,1]]

console.log(vowelStrings(words, queries));

function isVowel(str: string): boolean {
    return 'aeoui'.includes(str)
}

function preprocessWords(words: string[]): number[] {
    const counts = new Array(words.length + 1).fill(0);
    
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const startsWithVowel = isVowel(word[0]);
        const endsWithVowel = isVowel(word[word.length - 1]);
        counts[i + 1] = counts[i] + (startsWithVowel && endsWithVowel ? 1 : 0);
    }
    return counts;
}