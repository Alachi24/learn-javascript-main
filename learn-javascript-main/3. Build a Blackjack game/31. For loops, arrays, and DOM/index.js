let sentence = ["Hello", "my", "name", "is", "Chisa"];
let greetingEl = document.getElementById("greeting-el");

// Render the sentence in the greetingEl paragraph using a for loop and .textContent
for (i = 0; i < sentence.length; i++) {
  greetingEl.textContent += sentence[i] + " ";
}

// " " is added to the end to give spacing when it has been rendered
