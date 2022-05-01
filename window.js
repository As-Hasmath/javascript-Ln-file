/*console.log(window.innerHeight);

console.log(window.outerHeight);
console.log(window.outerWidth);
*/
let btn=document.getElementById("ckspn");
let btn1=document.getElementById("btm");

btn.addEventListener('click',openw);

function openw(){
    window.open('https://www.google.com','google','height=300,width=500');
}
let url="https://www.freepik.com";
btn1.addEventListener('click',function(){
    window.open(url,'google');
});