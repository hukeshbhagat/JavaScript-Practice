// Day 1 27/08

let input = document.querySelector("#inp");
let button = document.querySelector("#btn");
let counter = document.querySelector("#counters");
let orders = document.querySelector("#output");
let count = 0;

button.addEventListener("click", function () {
  if (input.value.trim() === "") {
    return;
  }

  let li = document.createElement("li");
  li.innerText = "📌 " + input.value;

  let delBtn = document.createElement("button");

  delBtn.innerText = "Delete";

  count++;
  counter.innerText = "Total Task = " + count;

  delBtn.addEventListener("click", function () {
    li.remove();

    count--;
    counter.innerText = "Total Task = " + count;
  });

  li.append(delBtn);

  orders.append(li);
  input.value = "";
  input.focus();
});
