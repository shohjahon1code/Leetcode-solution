function isFascinating(n: number): boolean {
  let concatNum = '';

  for (let i = 1; i <= 3; i++) {
    concatNum += (n * i).toString();
  }

  return (
    new Set(concatNum).size === 9 &&
    !concatNum.includes('0') &&
    concatNum.length === 9
  );
}

let n = 100;

console.log(isFascinating(n)); // Output: true
