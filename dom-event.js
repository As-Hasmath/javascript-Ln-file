let ed= document.getElementById("ptag");

// console.log(ed.offsetHeight);
console.log(ed.clientHeight);
console.log(ed.offsetWidth);

function hw(){
    ed.style.height="500px";
}

ed.addEventListener("click",hw);


let hta= document.getElementById("h3t");

// hta.addEventListener('mouseover',function(){
//    console.log("mouse is hover")}  );
// hta.addEventListener('mouseout', function(){alert("hlw")});
// window.addEventListener('DOMContentLoaded',function(){ console.log("page is loaded")});
