const hero =  ["Skatiman" , "JuniorG", "Tobo", "Chitti"]
const superman =["Tony","Ironman","Spiderman"]

hero.push(superman)

// console.log(hero);
// console.log(hero[4][1]);//kamal ka hai bhai acces the value

const  allhero = hero.concat(superman)

//console.log(allhero);

const other_array = [1,2,34,[3,5,6,8,9,[2,3,5,8,9,],5,3,5,6,7],90,12]
const real_array = other_array.flat(Infinity)// use to combine a useble formet
console.log(real_array);

console.log(Array.isArray("manish"));
console.log(Array.from("manish"));//from convert is in array


let score = 100
let score2 =200
let score3 = 300

console.log(Array.of(score,score2,score3));//of convert array