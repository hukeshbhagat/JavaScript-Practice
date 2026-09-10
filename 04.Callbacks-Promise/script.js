// Day-1 Callbacks

// part -1

// function greet(name) {
//     console.log(`Hello ${name}`)
// }

// function processUser(name,callback) {
//     callback(name)
// }
// processUser("Hukesh",greet)

// function square(num) {
//     console.log(`square of ${num * num}`)
// }

// function processNumber(num,callback) {
//     callback(num)
// }
// processNumber(5,square)

// part -2

// function calculate(a,b,callback) {
//    return callback(a,b)

// }

// function add(a,b) {
//   return  a + b
// }
// function sub(a,b) {
//   return  a - b
// }

// function mul(a,b) {
//   return  a * b
// }

// console.log(calculate(10,5,add))
// console.log(calculate(10,5,sub))
// console.log(calculate(10,5,mul))

// part 3

// let numbers = [1,2,3,4,5]

// function processArray(arr,callback) {
//     for(let i of arr) {
//         console.log(callback(i))
//     }

// }

// function square(num) {
//     return num * num
// }

// processArray(numbers,square)

// part 4

// let user = ["Lucky", "Rahul", "Aman"];

// function processUser(users, callback) {
//   for (let i of users) {
//     console.log(callback(i));
//   }
// }

// function welcomeUser(name) {
//   return `welcome ${name}`;
// }

// processUser(user, welcomeUser);

// function showlength(name) {
//   return `${name} = ${name.length}`;
// }

// processUser(user, showlength);

// Day 2

// function greet(name) {
//   console.log(`Hello ${name}`)
// }

// function processUser(name,callback) {
//   callback(name)
// }

// processUser("Hukesh",greet)

// function square(num) {
//   console.log(num * num)
// }

// function processNumber(num,callback) {
//   callback(num)
// }

// processNumber(5,square)

// part 2

// function calculate(a,b,callback) {
//   return callback(a,b)

// }

// function add(a,b) {
//   return a + b
// }

// function sub(a,b) {
//   return a - b
// }

// function mul(a,b) {
//   return a * b
// }

// console.log(calculate(5,5,add))
// console.log(calculate(5,5,sub))
// console.log(calculate(5,5,mul))

// let numbers = [2, 4, 6, 8, 10];

// function processArray(arr, callback) {
//   for(let i of arr) {
//     console.log(callback(i))
//   }

// }

// function square(num) {
//   return num * num
// }

// processArray(numbers,square);

let users = ["Lucky", "Rahul", "Aman"];

function processUser(users, callback) {
  for (let i of users) {
    console.log(callback(i));
  }
}

function welcomeUser(name) {
  return `Welcome ${name}`;
}

processUser(users, welcomeUser);

function showLength(name) {
  return `${name} = ${name.length}`;
}

processUser(users, showLength);
