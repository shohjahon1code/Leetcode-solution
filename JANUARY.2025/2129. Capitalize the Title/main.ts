function capitalizeTitle(title: string): string {
    let arrString = title.split(' ');

    let result: string[] = []

    for (let i = 0; i < arrString.length; i++) {

        if (arrString[i].length > 2) {
            let capitilized = arrString[i].charAt(0).toUpperCase() + arrString[i].slice(1).toLowerCase()
            result.push(capitilized)
        } else {
            result.push(arrString[i].toLowerCase())
        }

    }

    return result.join(" ")
};

let title = "L hV"

console.log(capitalizeTitle(title));