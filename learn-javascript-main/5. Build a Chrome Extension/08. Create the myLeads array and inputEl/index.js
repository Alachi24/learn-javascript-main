// Create two variables:
// myLeads -> should be assigned to an empty array
// inputEl -> should be assigned to the text input field

let myLeads = [];
const inputEl = document.getElementById("input-el"); //const is used so that the variable can't be assigned.

const inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  console.log("Button clicked!");
});
