// 1 -- Basically there are two datatypes
// 1 Primitive  (7 cateagry)
//1 - string ,Number,boolean, null,undefind,symbol,bigInt

const score = 100
const scoreValue =100.3

const boolean = false
const outside = null
let accountEmail;

const bigInt = 323434336456654n

//Reference(non primitive)

//array , object, fuction

// JavaScript is a dynamically typed language. Because data type will automatically assigned at the time of compilation or code execution

const Heros = ["JuniorG" , "Saktiman" , "tobo" ];


let muobj ={
    name: "manish",
    age :22,
}

const myfunction = function(){
    console.log("hello Manish");
}
myfunction();



//************Memory */

// there are two type 
// heap(non primitive) , stack (primitive)

let myyoutubename = "mr_coder"

let othername = "mr_coder"

othername = "manish pandey"
console.log(othername);
console.log(myyoutubename);