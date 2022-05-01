let stop =document.getElementById("Spn3");
// let tim=setTimeout(settimn,3000);
function settimn(){
    alert("hello world");
}

let tem =setInterval(fn,2000);
function fn(){
    console.log('Mosco \n');
}
stop.addEventListener('click',function(){
    clearInterval(tem);
});