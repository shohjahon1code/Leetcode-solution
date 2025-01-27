function stringMatching(words: string[]): string[] {
    let result:string[] = []
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (i !== j && words[j].includes(words[j])) {
                result.push(words[i]);
                break;
            }
        }
    }

    return result
};