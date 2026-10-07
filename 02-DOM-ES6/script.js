// Day 1 27/08

// let input = document.querySelector("#inp");
// let button = document.querySelector("#btn");
// let counter = document.querySelector("#counters");
// let orders = document.querySelector("#output");
// let count = 0;

// button.addEventListener("click", function () {
//   if (input.value.trim() === "") {
//     return;
//   }

//   let li = document.createElement("li");
//   li.innerText = "📌 " + input.value;

//   let delBtn = document.createElement("button");

//   delBtn.innerText = "Delete";

//   count++;
//   counter.innerText = "Total Task = " + count;

//   delBtn.addEventListener("click", function () {
//     li.remove();

//     count--;
//     counter.innerText = "Total Task = " + count;
//   });

//   li.append(delBtn);

//   orders.append(li);
//   input.value = "";
//   input.focus();
// });

// Day 2 01/09

// let input = document.querySelector("#inp");

// let button = document.querySelector("#btn");

// let counter = document.querySelector("#header");

// let count = 0;

// let orders = document.querySelector("#order");

// button.addEventListener("click", function () {
//   if (input.value.trim() === "") {
//     return;
//   }

//   let li = document.createElement("li");
//   li.innerText = input.value;

//   let delBtn = document.createElement("button");
//   delBtn.innerText = "Delete";

//   let completeBtn = document.createElement("button");
//   completeBtn.innerText = "Complete";

//   li.append(completeBtn);
//   li.append(delBtn);
//   orders.append(li);

//   count++;
//   counter.innerText = "Total Tasks: " + count;

//   completeBtn.addEventListener("click", function () {
//     li.classList.toggle("completed");
//   });

//   delBtn.addEventListener("click", function () {
//     li.remove();

//     count--;
//     counter.innerText = "Total Tasks: " + count;
//   });

//   input.value = "";

//   input.focus();
// });

// day 3 29/09

// part 1

// function stu() {
//   let marks = 30;
//   let promsie = new Promise((resolve,reject) => {
//   if(marks >= 40) {
//     resolve("Pass")
//   }else {
//     reject("Fail")
//   }
// })

// return promsie

// }
// stu()
// .then((result) => {
//   console.log(result)
// })
// .catch((error) => {
//   console.log(error)

// })

// part 2

//   let marks = 40;
//   let promsie = new Promise((resolve,reject) => {
//   if(marks >= 40) {
//     resolve("Pass")
//   }else {
//     reject("Fail")
//   }
// })

// async function stuCard() {

//   try {
//     let result = await promsie
//   console.log(result)
//   }
//   catch(error) {
//     console.log(error)

//   }

// }
// stuCard()

// part 3

// let input = document.querySelector("#inp");
// let button = document.querySelector("#btn")
// let order = document.querySelector("#list")

// let counter = document.querySelector("#counts")

// let count = 0;

// button.addEventListener("click",function() {
//   if(input.value.trim() === "") {
//     return

//   }

//   let li = document.createElement("li")

//   li.innerText = input.value

//   let delBtn = document.createElement("button")

//   delBtn.innerText = "Delete"

//   let completeBtn = document.createElement("button")

//   completeBtn.innerText = "Complete"

//   li.append(completeBtn)
//   li.append(delBtn)
//   order.append(li)

//   count++;
//   counter.innerText = "Total task count = " + count

//   completeBtn.addEventListener("click",function() {
//     li.classList.toggle("completed")
//   })

//   delBtn.addEventListener("click",function() {
//     li.remove()

//     count--;
//   counter.innerText = "Total task count = " + count

//   })

//   input.value = ""
//   input.focus()
// })

// part 4

// let input = document.querySelector("#inp");
// let button = document.querySelector("#btn");
// let studentList = document.querySelector("#order");
// let counts = document.querySelector("#counter");
// let count = 0;

// button.addEventListener("click", function () {
//   if (input.value.trim() === "") {
//     return;
//   }
//   let list = document.createElement("li");

//   list.innerText = input.value;

//   let delBtn = document.createElement("button");

//   delBtn.innerText = "Delete";

//   list.append(delBtn);
//   studentList.append(list);

//   count++;
//   counts.innerText = "Total Student: " + count;

//   delBtn.addEventListener("click", function () {
//     list.remove();

//     count--;
//     counts.innerText = "Total Student:  " + count;
//   });

//   input.value = "";
//   input.focus();
// });

// Day 4 ES6

// part 1

// function getUser() {

//   let promise = new Promise((resolve,reject) => {
//     resolve("User data received")
//     // let reject = "error"
//   })

//    return promise;

// }
// getUser()
// .then((result) => {
//   console.log(result)
// })
// .catch((error) => {
//   console.log(error)
// })

// function getUser() {
//   let promise = new Promise((resolve, reject) => {
//     resolve("User data received");
//     // let reject = "error"
//   });

//   return promise
// }

// async function loadUser() {
//   try {
//     let result = await getUser();
//     console.log(result);
//   } catch (error) {
//     console.log(error);
//   }
// }

// loadUser();

// part 3

// let add = (a,b) => {
//   return a + b
// }
// console.log(add(5,4))

// let square = (num)  => {
//   return num * num
// }
// console.log(square(5))

// let evenOdd = (num) =>  {
//   if(num % 2 === 0) {
//     return "Even"

//   }else {
//     return "Odd"

//   }
// }
// console.log(evenOdd(2))

// let arr = [1,2,3,4]

// let maxNo = arr => {
//   let max = arr[0]
//   for(let i of arr) {
//     if(i >= max) {
//       max = i;
//     }
//   }
//   return max;
// }
// console.log(maxNo(arr))

// let student = {
//   name: "Lucky",
//   age: 24,
//   city: "Nagpur"
// };

// let {name,age,city} = student

// console.log(name,age,city)

// let arr1 = [1,2,3];
// let arr2 = [4,5,6];

// let arr3 = [...arr1,...arr2]

// console.log(arr3)
// let [a,b,...rest] = arr3
// console.log(a,b,rest)

let student = {
  name: "Lucky",
  marks: [70, 80, 90],
  city: "Nagpur",
};

function showStudent(student) {
  let { name, marks, city } = student;

  let total = marks.reduce((acc, val) => {
    return acc + val;
  }, 0);

  let average = total / marks.length;

  return `${name} from ${city} scored average ${average}`;
}
console.log(showStudent(student));
