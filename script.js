// Dark Light Theme

const toggle = document.getElementById("theme-toggle");

toggle.onclick = () => {
  document.body.classList.toggle("light-mode");
};

// Typing Animation

const text = [
  "Student",
  "NCC Cadet",
  "Web Designer"
  
];

let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type(){

  if(count === text.length){
    count = 0;
  }

  currentText = text[count];
  letter = currentText.slice(0, ++index);

  document.querySelector(".typing")
  .textContent = letter;

  if(letter.length === currentText.length){
    count++;
    index = 0;
  }

  setTimeout(type, 150);

})();