function convertToBase7(num: number): string {
    if (num === 0) return "0";

    let result = "";
    let sign = num < 0 ? "-" : "";
    num = Math.abs(num);

    while (num > 0) {
        result = (num % 7) + result;
        num = Math.floor(num / 7);
    }

    return sign + result;
}


let n = 100

console.log(convertToBase7(n));
