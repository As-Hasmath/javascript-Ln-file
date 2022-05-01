let Log=0;
let user; //user="Ahsam";

alert(user ?? "Guest id" );

let option= Log==0 ?"Login":"Logout";

document.getElementById("btn").innerHTML=option;

/*if(Log==0){
    document.getElementById("btn").innerHTML="Login";
}
else{ 
    document.getElementById("btn").innerHTML="Logout";
}
*/