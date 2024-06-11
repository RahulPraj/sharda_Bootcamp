
// let obj = {
//     // empty object
// }

let personl = {
    firstName : "rahul",
    lastName : " prajapati",
    age : 26,
    favColor: "White"
}


console.log(personl);
// console.log(personl.lastName);
// console.log(personl['age']);

personl.favColor = 'black';
console.log(personl);

personl.gender = 'male';
console.log(personl);

delete personl.age;
console.log(personl);