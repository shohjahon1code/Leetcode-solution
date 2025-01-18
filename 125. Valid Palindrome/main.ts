function isPalindrome(s: string): boolean {
    let cleaned: string = ''

    for (let char of s) {
        if (isAlphanumeric(char)) {
            cleaned += char.toLowerCase()
        }
    }

    return cleaned === cleaned.split('').reverse().join('')
};

let s = "A man, a plan, a canal: Panama"

function isAlphanumeric(char: string): boolean {
    let code = char.charCodeAt(0)

    if (code >= 48 && code <= 57) {
        return true
    } else if (code >= 65 && code <= 90) {
        return true
    } else if (code >= 97 && code <= 122) {
        return true
    }

    return false
}


console.log(isPalindrome(s));