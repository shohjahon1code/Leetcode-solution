function intersect(nums1: number[], nums2: number[]): number[] {
    const countMap = new Map()

    for (const num of nums1) {
        countMap.set(num, (countMap.get(num) || 0) + 1);
    }
    const intersection: number[] = [];

    for (let num of nums2) {
        if (countMap.has(num)) {
            intersection.push(num);
            countMap.set(num, countMap.get(num) - 1);
        }
    }

    return intersection
};


let nums1 = [1, 2, 2, 1], nums2 = [2, 2]
console.log(intersect(nums1, nums2));
