let car ={Name:"X5D",  brand:"BMW",
    colour:"white"  ,   power:"4000L",
    // sayhlw () { 
    //     console.log(this.Name);
    // }
}

// for(let Show in car){
//     console.log(Show+"---"+car[Show]);
// }

function say(){
    document.write("Hello !");
}
car.Say=say();

// new keyword to make objcet
var newto = new Object();

newto.name ="habib";
newto.age =20;
newto.height="5.2f";

console.log(newto);
console.log("\n");

var Bmw ={
    name:"VX5", colour:"Gray",
    power:"2.1L" ,Price:3300000,
    get col(){
        return this.colour="green".toUpperCase();
    },
     
    set bmcng(a){
       this.Price = a;
    }
}
Bmw.bmcng=3000000;
 console.log(Bmw);
// console.log(Bmw.col);


