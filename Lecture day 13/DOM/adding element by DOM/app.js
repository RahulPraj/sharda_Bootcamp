let special = document.getElementById("special");

let heading = document.createElement("h1");
let para = document.createElement("p");

heading.innerText = "hii i am heading";
para.innerText = "hii i am para";
// special.appendChild(heading);

special.append(heading,para);



