let arr =[10,20,30, 40,50,60]

// for each
// arr.forEach(function(item, index){
//     console.log(`${item} and its index:${index} `)
// })


// map()

// let ans = arr.map(function(item , index){
//     return (item*2);
// })

// console.log(arr);
// console.log(ans);

// filter
let ans1 = arr.filter(function(item,index){
    if(item > 40){
        console.log(index);
        return true;
    }
    else{
        return false;
    }
})

console.log(ans1);