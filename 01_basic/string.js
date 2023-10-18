const name ="manish"
const Myworld ="Mamma"

console.log(name+ Myworld);// this is old way 

console.log(`Hello  my name is ${name} I love My ${Myworld}`);// new way ${} this is palce holder


const value = new String('manish');
console.log(value);
//console.log(typeof value);
//console.log(value[0]);
//console.log(value.length);
// console.log(value.toUpperCase());
// console.log(value.toLocaleUpperCase());
// console.log(value.lastIndexOf());
// console.log(value.charAt(3));
const newstring = value.substring(0,4)
//console.log(newstring);
const otherstring = value.slice(-3,1);
//console.log(otherstring);


const newstringone = "     Manish           "
console.log(newstringone);
console.log(newstringone.trim());// trim remove space 

//how to  replace value

const url = "https://manish.com/pandey%23ravi"
console.log(url.replace('%23','-'));

//how to ask

//console.log(url.includes('manish'));
console.log(url.includes('deepak'));