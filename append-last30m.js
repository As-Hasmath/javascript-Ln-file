 //append------------  
let main =document.getElementById("ol-li");

let mak =document.createElement("h2");

let tex= document.createTextNode("This is OL");
mak.appendChild(tex);

// main.appendChild(mak);

//insertBefore--------->
let inn =main.firstElementChild;
main.insertBefore(mak,inn);


//removeChild----------->
let rm =inn.nextElementSibling;
main.removeChild(rm);

//cloneNode---------->
let m =main.cloneNode(true);
document.body.appendChild(m);

//ReplaceChild----------->
let crt =document.createElement("li");
crt.textContent ="owner";

let elem =document.getElementById("my");
let set =elem.lastElementChild;

elem.replaceChild(crt,set);

main.insertAdjacentHTML("beforeend",crt);





