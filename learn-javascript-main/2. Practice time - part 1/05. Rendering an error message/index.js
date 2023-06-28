// When the user clicks the purchase button, render out
// "Something went wrong, please try again" in the paragraph
// that has the id="error".

let error = document.getElementById("error");

function purchase() {
  error.textContent = "Something went wrong, please try again";
  console.log(error); // add this only when you wish to see it on console, it doesn't change anything.
}
