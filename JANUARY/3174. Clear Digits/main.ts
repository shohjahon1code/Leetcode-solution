function clearDigits(s: string): string {
    let stack:string[] = [];

    for (let el of s) {
        if(!isNaN(Number(el))) {
            stack.pop()
        }else{
            stack.push(el)
        }
    }
    return stack.join('')
};

let s = "cb34"

console.log(clearDigits(s));
