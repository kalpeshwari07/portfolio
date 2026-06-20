// =====================
// DARK / LIGHT MODE
// =====================

const toggle = document.getElementById("theme-toggle");

if (toggle) {
  toggle.onclick = () => {
    document.body.classList.toggle("light-mode");
  };
}


// =====================
// TYPING ANIMATION
// =====================

const typingElement = document.querySelector(".typing");

if (typingElement) {

  const text = [
    "Student",
    "NCC Cadet",
    "Web Designer"
  ];

  let count = 0;
  let index = 0;
  let currentText = "";
  let letter = "";

  (function type() {

    if (count === text.length) {
      count = 0;
    }

    currentText = text[count];
    letter = currentText.slice(0, ++index);

    typingElement.textContent = letter;

    if (letter.length === currentText.length) {
      count++;
      index = 0;
    }

    setTimeout(type, 150);

  })();

}
