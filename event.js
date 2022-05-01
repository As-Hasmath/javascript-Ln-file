let tou = document.getElementById("hone");

tou.addEventListener('click',funct);
document.body.addEventListener('click',foc);

function funct(event){
    console.log('h1 is clicked');
    event.stopPropagation();
}
function foc(){
    console.log('body is clicked');
}

let sm=document.getElementById("sm");

sm.addEventListener('click',fa);
function fa(ae){
  console.log(submited);
  ae.preventDefault();
}