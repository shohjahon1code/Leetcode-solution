function findThePrefixCommonArray(A: number[], B: number[]): number[] {
    const n = A.length;
    const seenInA: Set<number> = new Set();
    const seenInB: Set<number> = new Set();
    const C: number[] = [];

    for (let i = 0; i < n; i++) {
        // Add current elements to the respective sets
        seenInA.add(A[i]);
        seenInB.add(B[i]);

        // Calculate the intersection of seenInA and seenInB
        let commonCount = 0;
        for (const num of seenInA) {
            if (seenInB.has(num)) {
                commonCount++;
            }
        }

        // Append the count to the result array
        C.push(commonCount);
    }

    return C;
}
