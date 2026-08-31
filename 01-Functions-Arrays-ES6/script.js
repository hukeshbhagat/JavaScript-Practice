// Day -1 26/08

// Part -1

// 1.

// let arr = [1,2,3,4,5,6]

// function sumArray(arr) {
// let sum = 0;
// for(let i of arr) {
//     sum += i;
// }
// return sum;
// }
// console.log(sumArray(arr))

// 2.

// let arr = [1,2,3,4,5,6];

// function evenNo(arr) {
//     let count = 0;
//     for(let i of arr) {
//         if(i % 2 === 0) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(evenNo(arr))

// 3.

// let arr = [1, 2, 3, 4, 5, 6];

// function findMax(arr) {
//   let max = arr[0];
//   for (let i of arr) {
//     if(i > max){
//         max = i
//     }
// }
// return max;
// }
// console.log(findMax(arr))

// 4.

// let str = "Hukesh";

// function countVowels(str) {
//     let count = 0
//     for(let i of str) {
//         if(i === "a" ||
//             i === "e" ||
//             i === "i" ||
//             i === "o" ||
//             i === "u"

//         )
//         count++;
//     }
//     return count;
// }
// console.log(countVowels(str))

// part - 2

// let numbers = [2, 5, 8, 10, 13, 20];

// let square = numbers.map((val) => {
//     return val * val;
// });
// console.log(square)

// let evenNo = numbers.filter((val) => {
//     return val % 2 === 0;
// })
// console.log(evenNo)

// let sum = numbers.reduce((acc,val) => {
//     return acc + val
// },0)

// console.log(sum)

// part 3

// let numbers = [10, 20, 30, 40, 50];

// function processNumbers(numbers) {
//   let [first, ...rest] = numbers;
//   let total = rest.reduce((acc, val) => {
//     return acc + val;
//   }, 0);
//   let average = total / rest.length;

//   return `First number: ${first} Remaining average: ${average}`;
// }
// console.log(processNumbers(numbers));

// Day -2

// part-1

// let arr = [1,2,3,4,5,6];

// function sumArr(arr) {
//     let sum = 0;
//     for(let i of arr) {
//         sum += i;

//     }
//     return sum;
// }
// console.log(sumArr(arr))

// let arr = [1,2,3,4,5,6];

// function countEven(arr) {
//     let count = 0;
//     for(let i of arr) {
//         if(i % 2 === 0) {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(countEven(arr))

// let arr = [1,2,3,4,5]

// function maxNO(arr) {
//     let max = 0;
//     for(let i of arr) {
//         if(i > max) {
//             max = i;
//         }
//     }
//     return max;
// }
// console.log(maxNO(arr))

// part 2

// let numbers = [2,5,8,10,13,20]

// let square = numbers.map((val) => {
//     return val * val
// })
// console.log(square)

// let evenNo = numbers.filter((val) => {
//     return val % 2 === 0;
// })
// console.log(evenNo)

// let totalSum = numbers.reduce((acc,val) => {
//     return acc + val
// },0)
// console.log(totalSum)

// part 3

// function processNumber(num,callback) {
// console.log(callback(num))
// }

// function square(num) {
// return num * num
// }
// function double(num) {
// return num * 2
// }
// processNumber(4,square)
// processNumber(8,double)

let numbers = [10, 15, 20, 25];

function checkNumbers(arr, callback) {
  for (let item of arr) {
    console.log(callback(item));
  }
}

function isEven(num) {
  return num % 2 === 0;
}

function isPositive(num) {
  return num > 0;
}
checkNumbers(numbers, isEven);
checkNumbers(numbers, isPositive);
