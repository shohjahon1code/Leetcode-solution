function shortestCompletingWord(licensePlate: string, words: string[]): string {
  const targetLetterCount = getLetterCount(licensePlate);
  let shortestWord = "";

  for (const word of words) {
    const wordLetterCount = getLetterCount(word);

    if (isValidWord(targetLetterCount, wordLetterCount)) {
      if (shortestWord === "" || word.length < shortestWord.length) {
        shortestWord = word;
      }
    }
  }

  return shortestWord;
}

function getLetterCount(word: string): Map<string, number> {
  const letterCount = new Map<string, number>();

  for (const char of word.toLowerCase()) {
    if (char >= "a" && char <= "z") {
      letterCount.set(char, (letterCount.get(char) || 0) + 1);
    }
  }

  return letterCount;
}

function isValidWord(
  target: Map<string, number>,
  word: Map<string, number>
): boolean {
  for (const [char, count] of target) {
    if ((word.get(char) || 0) < count) {
      return false;
    }
  }
  return true;
}

// Test cases
console.log(
  shortestCompletingWord("1s3 PSt", ["step", "steps", "stripe", "stepple"])
); // Output: "steps"
console.log(shortestCompletingWord("aBc 12", ["ab", "abc", "bca", "acb"])); // Output: "abc"
