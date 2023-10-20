function Myname() {
// console.log("M");
// console.log("A");
// console.log("N");
// console.log("I");
// console.log("S");
// console.log("H");
}
Myname()

// function Addnum(num1 , num2) {
//     console.log(num1+num2);
// }
// Addnum(2,4)

function Addnum(num1 , num2) {
    let result = num1+num2
    //return result
    return num1+num2
}
const result = Addnum(2,4)
console.log("Result:", result);

function loggedin(username) {
    return `${username} just log in`
}
loggedin("Manish")
console.log(loggedin("Manish"));

