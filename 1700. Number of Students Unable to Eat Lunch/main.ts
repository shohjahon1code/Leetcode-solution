function countStudents(students: number[], sandwiches: number[]): number {
    let count: number = 0
    while (students.length > 0) {
        if (students[0] === sandwiches[0]) {
            students.shift()
            sandwiches.shift()
            count = 0
        } else {
            students.push(students.shift()!)
            count += 1
        }

        if (count === students.length) {
            break
        }
    }

    return students.length
};

let students = [1, 1, 1, 0, 0, 1], sandwiches = [1, 0, 0, 0, 1, 1]

console.log(countStudents(students, sandwiches));
