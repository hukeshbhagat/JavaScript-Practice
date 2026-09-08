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

// Day 2 01/01

let input = document.querySelector("#inp");

let button = document.querySelector("#btn");

let counter = document.querySelector("#header");

let count = 0;

let orders = document.querySelector("#order");

button.addEventListener("click", function () {
  if (input.value.trim() === "") {
    return;
  }

  let li = document.createElement("li");
  li.innerText = input.value;

  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";

  let completeBtn = document.createElement("button");
  completeBtn.innerText = "Complete";

  li.append(completeBtn);
  li.append(delBtn);
  orders.append(li);

  count++;
  counter.innerText = "Total Tasks: " + count;

  completeBtn.addEventListener("click", function () {
    li.classList.toggle("completed");
  });

  delBtn.addEventListener("click", function () {
    li.remove();

    count--;
    counter.innerText = "Total Tasks: " + count;
  });

  input.value = "";

  input.focus();
});
