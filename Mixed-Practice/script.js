// Day 1

// part 1

// let arr = [15,8,25,3,10];

// function findMin(arr) {
//     let min = arr[0]
//     for(let i of arr) {
//         if(i < min) {
//             min = i
//         }
//     }
//     return min
// }
// console.log(findMin(arr))

// function countOdd(arr) {
//     let count = 0;
//     for(let i of arr) {
//         if(i % 2 !== 0) {
//             count++
//         }
//     }
//     return count;
// }
// console.log(countOdd(arr))

// part 2

// let numbers = [5,10,15,20,25]

// let newArr = numbers.map((val) => {
//     return val + 10
// })
// console.log(newArr)

// let greaterNo = numbers.filter((val) => {
//     return val > 15
// })
// console.log(greaterNo)

// let sum = numbers.reduce((acc,val) => {
//     return acc + val
// },0)
// console.log(sum)

// part 3

// function greet(name) {
//     console.log(name)
// }
// function processUser(name,callback) {
//     callback(name)

// }
// processUser("Hukesh",greet)

// part 4

// let student = {
//     name: "Lucky",
//     marks: [70,80,90]
// };

// function showResult(student) {
//     let {name,marks} = student;

//     let total = marks.reduce((acc,val) => {
//         return acc + val
//     },0)

//     let average = total / marks.length

//     return `${name} average marks: ${average}`

// }
// console.log(showResult(student))


// Day 2 

// part 1 

// function profile(username,password) {
//     return new Promise((resolve,reject) => {
//     if(username === "Hukesh" && password === 1234) {
//         resolve("Login Successful")
//     }else {
//         reject("Login Failed")
//     }
// })
// }




// async function login(username,password) {
    
//         try{ 
//             let result = await profile(username,password)
//             console.log(result)
//             console.log("Dashboard Loaded")
//             console.log("Welcome User")
//         } 
//         catch(error) {
//             console.log(error)

//         }


//     }
//    login("Hukesh",1234)


// part 2

let arr = [12,5,20,8,15,3]

// function findMax(arr) {
//     let max = arr[0];
//     for(let i of arr) {
//         if(i >= max) {
//             max = i
//         }
//     }
//     return max
// }
// console.log(findMax(arr))

//  let arr = [12,5,20,8,15,3]

// function findMin(arr) {
//     let min = arr[0];
//     for(let i of arr) {
//         if(i <= min) {
//             min = i
//         }
//     }
//     return min
// }
// console.log(findMin(arr))



// function evenNo(arr) {
//     let count = 0;
//     for(let i of arr) {
//         if(i % 2 === 0) {
//             count++
//         }
//     }
//     return count
// }
// console.log(evenNo(arr))


// function getTotal(arr) {
//     let sum = 0
//     for(let i of arr) {
//         sum += i;
//     }
//     return sum
// }
// console.log(getTotal(arr))


// part 3

// part 4

let student = {
    name : "Hukseh",
    marks : [2,3,5],
    city : "Nagpur"
}

function showResult(student) {
    let {name,marks,city} = student

    let mark = 0;

    for(let i of marks) {
        mark += i
    }
    

    


}






        
    