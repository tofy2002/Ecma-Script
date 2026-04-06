const createEmployee=(Id,Name,Age,Salary,Dep)=>{
    return{
        Id:Id,
        Name:Name,
        Age:Age,
        Salary:Salary,
        Dep:Dep
    }
}
const EmployeesArray = [
    createEmployee(1, "Alice",  30, 5000, "HR"),
    createEmployee(2, "Bob",    25, 4000, "IT"),
    createEmployee(3, "Carol",  35, 7000, "Finance"),
    createEmployee(4, "David",  28, 4800, "IT"),
    createEmployee(5, "Eve",    40, 6000, "HR"),
];

const EmployeeCRUD = {
    EmployeesArray: [...EmployeesArray],  

    AddNewEmp(emp) {
        this.EmployeesArray.push(emp);
    },
    DeleteEmp(id) {
        this.EmployeesArray = this.EmployeesArray.filter(e => e.Id !== id);
    },
    SearchForEmpWithId(id) {
        return this.EmployeesArray.find(e => e.Id === id);
    }
};  
function getname(){
    return function(emp){
        return emp.Name;
    }
}
const extractName = getname();
console.log(extractName(EmployeesArray[0]));
function Counter(){
    let count = 0;
    return function(){
        count++;
        console.log(`Count: ${count}`);
        return count;
    }
}
const counter = Counter();
counter(); 
counter();
counter();
function createClickTracker(){

    let count = 0;   

    return function(){

        count++;

        console.log("Clicks:", count);

        $("body").css(
            "background-color",
            `hsl(${count * 40},70%,80%)`
        );
    };
}
const trackClick = createClickTracker();

$("#btn").on("click", trackClick);
function createadder(fixed){
    return function(x){
        return fixed + x;
    };
}
// const add5 = createadder(5);

// console.log(add5(10));
// console.log(add5(3));  
// console.log(add5(100)); 
function createEmpTracker(){
   let added=0;
   return function(emp){
    EmployeeCRUD.AddNewEmp(emp);
    added++;
    console.log(`Added ${added} employees`);
   }
}
const trackedAdd = createEmpTracker();
trackedAdd(createEmployee(6, "Frank", 32, 5500, "Finance"));
trackedAdd(createEmployee(7, "Grace", 27, 4200, "IT"));

function createBonus(percent){
    return function(emp){
        const bonus=emp.Salary*(percent/100);
        const salary=emp.Salary+bonus;
         console.log(`${emp.Name}: ${emp.Salary} → ${salary} (+${percent}%)`);
         return {...emp, Salary: salary}
    }
}
// const apply10=createBonus(10);

// apply10(EmployeesArray[0]);
function createGreeting(department){
    return function(emp){
        console.log(`Welcome ${emp.Name}, glad to have you in the ${department} department!`);
    }


}
const sayHello=createGreeting("Hr");
sayHello(EmployeesArray[0]);

const employeenames=EmployeesArray.map(emp=>emp.Name);
console.log(employeenames);

const higherSalaries=EmployeesArray.filter(emp=>emp.Salary>4500);
console.log(higherSalaries);
let total=EmployeesArray.reduce((total,emp)=>total+emp.Salary,0);
console.log(total);
function IncreaseSalry(emp){
    return {...emp,Salary:emp.Salary*1.10}
}
const updatealice=IncreaseSalry(EmployeesArray[0]);
console.log(updatealice);
function addEmployeeImmutabily(emp,newemp){
    return [...emp,newemp];
}
const newArray = addEmployeeImmutabily(
    EmployeesArray,
    createEmployee(8, "Hank", 29, 5200, "HR")
);
console.log(EmployeesArray.length); 
console.log(newArray.length);
function applyBonus(fn){
    return EmployeesArray.map(fn);
}
const result=applyBonus(emp=>({
    ...emp,
    Salary:emp.Salary+500
}));
result.forEach(e => console.log(`${e.Name}: ${e.Salary}`));
function filterDepartments(dept){
    return function(emp){
        return emp.Dep===dept;
    }
}
const filterHR=EmployeesArray.filter(filterDepartments("HR"));
console.log(filterHR.map(emp=>emp.Name));
const updateSalaries=EmployeesArray.map(emp=>({
    ...emp,
    Salary:emp.Salary*1.10
}));
console.log(updateSalaries[0].Salary);
console.log(EmployeesArray[0].Salary);