let em =document.getElementById("h20");
 em.innerHTML="Hello now your can go.";

// console.log(em);

let ulli =document.getElementsByClassName("li1");

// ulli[1].innerHTML="he"; it's work

for(let i=0; i<ulli.length; i++){

    ulli[i].innerHTML="he";
}

let ele =document.getElementsByTagName("p");

// ele[2].innerHTML="None text";

// for(let r=0; r<ele.length; r++){

//   ele[r].innerHTML="Empty text";
// }

let tst=document.getElementById("testdiv");

let D =tst.getElementsByTagName("p");
// D[2].innerHTML= "hello";

for(Ra=0 ; Ra<D.length ; Ra++){
    D[Ra].innerHTML = "Hay";
}

