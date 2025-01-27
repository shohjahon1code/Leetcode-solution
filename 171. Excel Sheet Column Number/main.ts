function titleToNumber(columnTitle: string): number {
    let columnNumber = 0
    for (let i = 0; i < columnTitle.length; i++) {
        const charValue = columnTitle.charCodeAt(i) - 64;

        columnNumber = columnNumber * 26 + charValue;
    }

    return columnNumber
};

let columnTitle = "AA"

console.log(titleToNumber(columnTitle))
