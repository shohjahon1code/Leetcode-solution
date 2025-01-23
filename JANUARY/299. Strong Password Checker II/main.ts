function strongPasswordCheckerII(password: string): boolean {
    if (password.length < 8) {
        return false;
    }

    let hasLower = false;
    let hasUpper = false;
    let hasDigit = false;
    let hasSpecial = false;

    const specialCharacters = new Set("!@#$%^&*()-+");

    for (let i = 0; i < password.length; i++) {
        const char = password[i];
        const code = char.charCodeAt(0)

        if (code >= 48 && code <= 57) hasDigit = true

        else if (code >= 97 && code <= 122) hasLower = true

        else if (code >= 65 && code <= 90) hasUpper = true

        else if (specialCharacters.has(char)) hasSpecial = true

        if (i > 0 && password[i] === password[i - 1]) {
            return false;
        }

    }

    return hasSpecial && hasDigit && hasLower && hasUpper

};

let password = "IloveLe3tcode!"

console.log(strongPasswordCheckerII(password));
