// HOF ->
// case 1
// function a(b){ //hof
//     console.log("hii i am hof");

//     function b(){
//         console.log("hii i am in hof");
//     }
// }

// function a(b){
//     console.log("hii i am hof");

    
// }

// function b(){
//     console.log("hii i am in hof");
// }
// a(b);


// case 2
// function a(){
//      console.log("hii i am case 2");

//      function b(){
//         console.log("hii i am in case 2");
//      }

//      return b;
// }

// let ans = a();
// console.log(ans);


// callback function;

function a(num){ //hof
    console.log("hii i am hof");
    b();

}


function b(){
        console.log("hii i am in hof");
}



a(b);