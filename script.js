// Inspired by https://github.com/agam95/Tip-calculator-app/blob/master/script.js

// How to change href of an element: https://www.codegrepper.com/code-examples/javascript/how+to+change+href+using+javascript

const button = document.querySelectorAll("button");
const rating = document.querySelector(".rating");

button.forEach(e => {e.addEventListener("click", buttonRating);})

function buttonRating(event) {
  if (event.target.innerHTML != "Submit") {
    /* We disable the submit button untill one of the evaluation buttons has been pressed */
  var a = document.getElementById("submit");
  a.href="#one" ;
    
  button.forEach(function (val) {
    val.classList.remove("active");
    if (event.target.innerHTML == val.innerHTML) {
      val.classList.add("active");
    }
  })
  let number = event.target.innerHTML;
  rating.innerText = number;
  return;}
}