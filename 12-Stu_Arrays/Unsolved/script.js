// WRITE YOUR CODE HERE
const studentsName = ["Bob", "Billy", "Joe"];

console.log(studentsName.length);

console.log(`Welcome to the class, ${studentsName[0]}`);
console.log(`Welcome to the class, ${studentsName[1]}`);
console.log(`Welcome to the class, ${studentsName[2]}`);

studentsName[0] = "Justin";

if (studentsName[0] !== "Bob") {
    console.log(`${studentsName[0]} is in the class`);
}