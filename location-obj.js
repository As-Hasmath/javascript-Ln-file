let a ;

a=document.getElementById("vis");
// console.log(location.href);
// console.log(location.pathname);
// console.log(location.protocol);
a.addEventListener("click",visitfn);
function visitfn(){
    // window.location="https://www.google.com";
  location.assign('https://www.w3schools.com');
}
