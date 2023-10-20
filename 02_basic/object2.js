//singletons.

const instauser = {}

instauser.id ="122"
instauser.name="manish"
instauser.loggedin ="false"

// console.log(instauser);


const user1 = {1:"a",2:"b",3:"c"}
const user2 = {4:"c",5:"d",6:"e"}

//const user3 = {user1,user2}
//const user3 =Object.assign({},user1,user2)
// console.log(user3);
const user3 ={...user1 , ...user2}
//console.log(user3);


// desturcturing
const course ={
    coursename:"Js",
    price:"1000",
    courseInstrutor:"Mainsh"

}
const {courseInstrutor}= course
console.log(course);
console.log(courseInstrutor);
//how to distructure 
const {courseInstrutor:Instrutor}= course
console.log(course);
console.log(Instrutor);


// API 
// {
//     "coursename":"Js",
//     "price":"1000",
//     "courseInstrutor":"Mainsh"

// }


