function isBalanced(num: string): boolean {
    let even = 0
    let odd = 0

    for (let i = 0; i < num.length; i++) {
        let digit = parseInt(num[i], 10)

        if (i % 2 == 0) {
            even += digit
        }else{
            odd += digit
        }
    }

    return even === odd
};

