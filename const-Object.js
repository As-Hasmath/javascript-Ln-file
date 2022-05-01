function Study(Name,cls,roll,subject){
    this.FullName =Name;
    this.Class= cls;
    this.RollNo =roll;
    this.Group =subject;
}

let std1 = new Study("Habibul",9,18,'science');

let std2 = new Study("rabbi",8,20,"none");

console.log(std1,std2);