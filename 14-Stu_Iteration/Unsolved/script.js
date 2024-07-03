// WRITE YOUR CODE BELOW
const students = ["Bob", "Billy", "Joe", "Justin", "Chris"];

console.log(students.length);

for (let i = 0; i < students.length; i++) {
    console.log(`Great to see you, ${students[i]}!`);
}

for (let name of students) {
    console.log(`Great to see you, ${name}!`);
}