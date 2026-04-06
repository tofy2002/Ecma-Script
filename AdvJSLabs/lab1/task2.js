
const user = {
    name: "John Doe",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Anytown"
    },
    getFullAddress() {
        return `${this.address.street}, ${this.address.city}`;
    }
};

console.log(user.getFullAddress());
let students = [
    {
        name: "Adham",
        age: 25,
        address:{ street:"Main", city:"NY" }
    },
    {
        name: "Ali",
        age: 22,
        address:{ street:"Tanta", city:"Cairo" }
    },
    {
        name: "Sara",
        age: 28,
        address:{ street:"Giza", city:"Alex" }
    }
];
students.sort((a,b)=> a.name.localeCompare(b.name));
console.log("Sorted By Name");
console.log(students);

students.sort((a,b)=> a.age - b.age);
console.log("Sorted By Age");
console.log(students);
// let filteredStudents = students.filter(s => s.age > 24);
// console.log("Filtered Age > 24");
// console.log(filteredStudents);