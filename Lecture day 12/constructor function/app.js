// //constructor function
// function User(){
//     this.userName = "rahul";
//     this.myEmail = "rahul@123gmail.com"
// }

// let user1 = new User();
// console.log(user1);

//custom constructor function
// function User(naam, email){
//     this.userName = naam ;
//     this.myEmail = email;
// }

// let user1 = new User("rahul","rahul@123gmail.com");
// let user2 = new User("shubham","shubham@123gmail.com");
// console.log(user1);
// console.log(user2.userName);

// class syntax

class person{
     User(naam, email){
        this.userName = naam ;
        this.myEmail = email;
    }

    printDetail(){
        console.log(`i am ${this.userName} and my email is ${this.myEmail}`);
    }
}

let person1 = new person("rahul","rahul@123gmail.com")

console.log(person1);
console.log(person1.User)