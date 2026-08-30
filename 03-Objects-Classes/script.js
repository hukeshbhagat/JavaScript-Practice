// Day 1 30/08

// Part-1

// let student = {

//     name: "Hukesh",
//     age: 23,
//     city: "Nagpur",

//     showInfo() {
//         console.log(`Hello my name is ${this.name}. I am ${this.age} years old.I live in ${this.city}.`)

//     }
// }
// // console.log(`hello my name is ${student.name}. I am ${student.age} years old.I live in ${student.city}.`)

// student.showInfo()

// Part-2

// let students = [
//     {name: "Rahul",marks: 80},
//     {name: "Aman",marks: 65},
//     {name: "Neha",marks: 90},
// ];

// for(let student of students) {
//     console.log(student.name)
// }

// let greater = students.filter((student) =>{
//     return student.marks > 70

// })
// console.log(greater)

// let highest = students[0];

// for(let student of students) {

//     if(student.marks > highest.marks) {
//         highest = student
//     }
// }
// console.log(highest)

// part-3


// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
//     introduce() {
//         console.log(`Hello my name is ${this.name} and I am ${this.age} years old.`)
//     }
// }
// let p1 = new Person("Hukesh",23);
// p1.introduce()
// let p2 = new Person("Dev",23);
// p2.introduce()

// part-4

class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
}

class Developer extends Person{
    constructor(name,age,language) {
        super(name,age)
        this.language = language; 
    }
    showInfo() {
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old.My Programming language is ${this.language}.`)
    }
}


let p1 = new Developer("Hukesh",23,"Bsc-it");
p1.showInfo()
let p2 = new Developer("Dev",23,"c++");
p2.showInfo()