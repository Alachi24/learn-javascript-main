// function saveLead() {
//   console.log("Button clicked!");
// }

// With this, the onclick at html isn't needed and all can be done in javascript
let inputBtn = document.getElementById("input-btn");

inputBtn.addEventListener("click", function () {
  console.log("Button Clicked from addEventListener");
});
