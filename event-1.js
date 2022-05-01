let x =document.getElementById("ptag");
x.addEventListener('dblclick',sty);

function sty(){
    x.style.height="20px";
}

// window.addEventListener('keydown',function(ae){ console.log(ae.key) }  );

// window.addEventListener("scroll",count);
// function count(){ console.log("scroling") }

let y = document.getElementById("inp");
y.addEventListener('focus',focu);
function focu() { console.log('in focus');
y.style.background= 'rgba(100,200,70,0.5)' 

}

y.addEventListener('blur',blr);
function blr() { 
  console.log('out of box '); 
  y.style.background='none'

}

