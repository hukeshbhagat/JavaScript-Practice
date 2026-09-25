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

// class Person {
//     constructor(name,age) {
//         this.name = name;
//         this.age = age;
//     }
// }

// class Developer extends Person{
//     constructor(name,age,language) {
//         super(name,age)
//         this.language = language;
//     }
//     showInfo() {
//         console.log(`Hello my name is ${this.name} and I am ${this.age} years old.My Programming language is ${this.language}.`)
//     }
// }

// let p1 = new Developer("Hukesh",23,"Bsc-it");
// p1.showInfo()
// let p2 = new Developer("Dev",23,"c++");
// p2.showInfo()

// Day 1 3/09

// let car = {
//     brand: "Tata",
//     model: "Punch",
//     price: 800000,

//     showInfo() {
//         return `Car name is ${this.brand}, model is ${this.model} and price is ${this.price}.`

//     }
// };
// console.log(car.showInfo())

// part 2

// class BankAccount {
//   constructor(owner, balance) {
//     this.owner = owner;
//     this.balance = balance;
//   }
//   deposit(amount) {
//     this.balance += amount;
//   }
//   showBalance() {
//     console.log(this.balance);
//   }
// }

// class SavingsAccount extends BankAccount {
//   constructor(owner, balance, interestRate) {
//     super(owner, balance);
//     this.interestRate = interestRate;
//   }
//   addInterest() {
//     let interest = (this.balance * this.interestRate) / 100;

//     this.balance += interest;
//   }
// }

// let s1 = new SavingsAccount("Hukesh", 5000, 5);
// s1.showBalance();
// // s1.deposit(1000)
// // s1.showBalance()

// s1.addInterest();
// s1.showBalance();

// 23/09

// part 1

// function studentMarks() {
//   let marks = 10;
//   let promise = new Promise((resolve,reject) => {
//   if(marks >= 40) {
//     resolve("Pass")
//   }else {
//     reject("Fail")
//   }
// })

// return promise
// }
// studentMarks()
// .then((result) => {
//   console.log(result)
// })
// .catch((error) => {
//   console.log(error)
// })

// async function studentMarks() {
//   let marks = 30;
//   let promise = new Promise((resolve,reject) => {
//   if(marks >= 40) {
//     resolve("Pass")
//   }else {
//     reject("Fail")
//   }
// })

// try {
//   let result = await promise
//   console.log(result)
// }
// catch(error) {
//   console.log(error)
// }

// }
// studentMarks()

// student = {
//   name: "Hukesh",
//   city: "Nagpur",
//   marks: [70, 80, 90],
// };

// function studentmarks() {
//   let { name, city, marks } = student;

//   let totalMarks = marks.reduce((acc, val) => {
//     return acc + val;
//   }, 0);

//   let average = totalMarks / marks.length;

//   let progress;
//   if (average >= 40) {
//     progress = "Pass";
//   } else {
//     progress = "Fail";
//   }

//   return `Name = ${name}
//   Total Marks = ${totalMarks}
//   Average = ${average}
//   Progress = ${progress}`;
// }
// console.log(studentmarks());



// part 4 

// let user = {
//   name: "Hukesh",
//   age: 23,
//   city: "Nagpur"
// }

// let {name,city} = user

// let copy = {
//   ...user,
//   gender: "male"
// }

// console.log(user)
// console.log(copy)



// part 5 

let products = [
  {name:"Phone", price: 15000},
  {name:"Laptop",price:50000},
  {name:"Mouse",price:800}
];

function getExpensiveProducts(products) {
  
  // let {price} = products

  let greaterPrice = products.filter((val) => {
    return val.price > 10000
  })
  console.log(greaterPrice)
  

  let total = greaterPrice.reduce((acc,val) => {
    return acc + val.price

  },0)
  console.log(total)

  return {
   products: greaterPrice,
    total: total
  }
  


}
getExpensiveProducts(products)

