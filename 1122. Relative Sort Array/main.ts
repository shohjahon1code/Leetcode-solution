function relativeSortArray(arr1: number[], arr2: number[]): number[] {
    const orderMap: Map<number, number> = new Map();

    arr2.forEach((value, index) => {
        orderMap.set(value, index)
    })


    return arr1.sort((a, b) => {
        const indexA = orderMap.has(a) ? orderMap.get(a) : arr2.length + arr1.indexOf(a);
        const indexB = orderMap.has(b) ? orderMap.get(b) : arr2.length + arr1.indexOf(b);

        return indexA! - indexB!;
    });
};

let arr1 = [2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], arr2 = [2, 1, 4, 3, 9, 6]

console.log(relativeSortArray(arr1, arr2));