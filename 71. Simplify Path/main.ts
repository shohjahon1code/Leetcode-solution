function simplifyPath(path: string): string {
    let stack:string[] = []

    let components = path.split("/")

    for(let component  of components) {
        if(component=== '' || component === '.') continue

        else if(component ==='..') stack.pop()

        else stack.push(component)
    }

    return "/" + stack.join("/");
    
};

let path = "/home/"

console.log(simplifyPath(path));
