// let person = {
//     a:5,
//     b:10,
//     c:true,
//     fn: function sum(){
//         console.log("hii i am teaching js");
//     }
// }

// console.log(person);
// console.log(person.b);
// // console.log(person.fn); // for function
// console.log(person.fn()); //value

var person = {
    a:5,
    b:10,
    c:true,
    fn: function sum(){
        // console.log("hii i am teaching js");
        return this.a + this.b ;
    }
}

let ans = person.fn();
console.log(ans);