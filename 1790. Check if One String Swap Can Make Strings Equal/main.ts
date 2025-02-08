function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 === s2) return true; // Already equal

    let diff: number[] = [];

    // Find the positions where the strings differ
    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) {
            diff.push(i);
            if (diff.length > 2) return false; // More than two differences → Not possible
        }
    }

    // There should be exactly two differences, and swapping should make them equal
    return (
        diff.length === 2 &&
        s1[diff[0]] === s2[diff[1]] &&
        s1[diff[1]] === s2[diff[0]]
    );
}

let s1 = "bank", s2 = "kanb"

console.log(areAlmostEqual(s1, s2));
