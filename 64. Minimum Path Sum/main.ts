function minPathSum(grid: number[][]): number {
    
  let first = grid[0];
  let result:number[] = []

  for(let i = 1 ; i < grid.length; i++) {
    const last_element = grid[i][grid[i].length - 1];    
    result.push(last_element)
  }

  return [...result, ...first].reduce((sum, element) => sum+element, 0)
};



let num = [[1,3,1],[1,5,1],[4,2,1]]

console.log(minPathSum(num))