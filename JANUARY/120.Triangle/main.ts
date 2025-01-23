function minimumTotal(triangle: number[][]) {
  const n = triangle.length;
  const dp = triangle[n - 1].slice(); 

  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);      
    }
  }

  return dp[0];
}

let input = [[2],[3,4],[6,5,7],[4,1,8,3]]

console.log(minimumTotal(input));

