
// function sum(){
//     console.log("hii i am function");
// }

// // sum(); //function calling
// console.log(sum());


// function sum(){
//     let a = 5;
//     let b = 10;
//     let sum = a + b;

//     return sum;
// }

// let ans = sum();
// console.log(ans);


// parameterized function

function sum(num3, num4 = 4){
    let a = 5;
    let b = 10;
    // let sum = a + b;

    return a + b + num3 + num4;
}
// let ans = sum(8, 3);
let ans = sum(8);
console.log(ans);