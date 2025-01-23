function checkIfExist(arr: number[]): boolean {
    let setData = new Set();

    for (let n of arr) {
        let  double = n * 2;

        if (setData.has(double) || setData.has(n /2)) {
            return true;
        }

        setData.add(n);
    }

    return false;
};


let arr: number[] = [10,10,5,3];
console.log(checkIfExist(arr));
