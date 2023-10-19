// Array
//JavaScript arrays are resizable and can contain a mix of different data types.

const myArr = [22,34,4,45,]
console.log(myArr[0]);

//Array Methods

myArr.push(6)//add one value 
// console.log(myArr);

myArr.pop()// remove last value 
//console.log(myArr);

myArr.unshift(9)
myArr.shift()
// console.log(myArr);


// console.log(myArr.includes(2));

// console.log(myArr.indexOf(1));

//slice and splice

console.log("A" ,myArr);

const mynew = myArr.slice(1,3)

console.log(mynew);
const mynew1 = myArr.splice(1,3)
console.log(mynew);
console.log(mynew1);