function adde(a,b){
 document.write(a+b);
}

adde(5,34);

function mult_table(){
    for(i=1;i<11;i++){
  document.write(`12 x ${i}=${12*i}`);
  document.write("<br>");
 }
}
mult_table();

function nem(){
    if(arguments==0){
        console.log("NO number enter!");
    }
    else{
        let sum=0;
        for(let i=0;i<arguments.length; i++){
            sum=sum+arguments[i];
        }
        console.log(sum);
    }
}

nem(5,10,15);