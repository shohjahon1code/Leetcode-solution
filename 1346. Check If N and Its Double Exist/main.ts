function checkIfExist(arr: number[]): boolean {
    let result = {}
    for (let num of arr) {
        if(result[2 * num] || (num % 2 === 0 && result[num / 2])){
            return true;
        }
        result[num] = true
    }

    return false;
    
};


let arr: number[] = [10,2,5,3];
console.log(checkIfExist(arr));
