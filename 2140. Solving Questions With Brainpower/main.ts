function mostPoints(questions: number[][]): number {
  const n = questions.length;
  const dp = new Array(n + 1).fill(0);

  for (let i = n - 1; i >= 0; i--) {
    const [points, brainpower] = questions[i];
    dp[i] = Math.max(dp[i + 1], points + dp[Math.min(i + brainpower + 1, n)]);
  }

  return dp[0];
}

let questions = [
  [3, 2],
  [4, 3],
  [4, 4],
  [2, 5],
];

console.log(mostPoints(questions)); // Output: 5;
