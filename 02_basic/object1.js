//OBJECT literals
const sym = Symbol("key1")//how to define symbol
const object = {
    name:"Manish",
    age:"22",
    [sym] : "key1",
    email:"manish@gmail.com",
    lastloging:["monady","saturday"]
}

// console.log(object);
// console.log(object.email);
// console.log(object["email"]);// agar aisa ho "email"="manish@gmail.com"
// console.log(object[sym]);//how to print symbol


object.email = "pandey@gmail.com"
//console.log(object);

object.greeting = function() {
    console.log("Namaste");
}
console.log(object.greeting());

object.greeting1 = function() {
    console.log(`Namaste ${this.name}`);
}
console.log(object.greeting());
console.log(object.greeting1());

