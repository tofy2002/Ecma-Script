//q1
let numbers=[5,3,4,2,1,8,7,6];
let asc=numbers.sort((a,b)=>a-b);
let desc=numbers.sort((a,b)=>b-a);
console.log(asc);
console.log(desc);
let filtered=numbers.filter(num=>num >50);
console.log("Greater than 50:", filtered);

let max=Math.max(...numbers);
let min=Math.min(...numbers);
console.log("Max:", max);
console.log("Min:", min);

console.log("#".repeat(20));
//q2
function calculate(operation , ...nums ) {
    if(operation=="sum"){
        result=nums.reduce((acc, num) => acc + num, 0);
        console.log("Sum:", result);
    }
    else if(operation=="product"){
        result=nums.reduce((acc, num) => acc * num, 1);
        console.log("Product:", result);
    }
    else if(operation=="sub"){
        result=nums.reduce((acc,num) => acc - num, 0);
        console.log("Subtraction:", result);
    }
    console.log(`the result of ${operation} for ${nums.join(", ")} is: ${result}`);
}
calculate("sum", 1, 2, 3, 4);

//q3
const project={
    projectId:prompt("Enter project ID:"),
    projectName:prompt("Enter project name:"),
    startDate:prompt("Enter start date:"),
    printDetails:function(){
        console.log(`Project ID: ${this.projectId}`);
        console.log(`Project Name: ${this.projectName}`);
        console.log(`Start Date: ${this.startDate}`);
    }
}
project.printDetails();