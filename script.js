// =====================
// DARK / LIGHT MODE
// =====================

const toggle = document.getElementById("theme-toggle");

if (toggle) {

```
const icon = toggle.querySelector("i");

toggle.onclick = () => {

    // Change theme
    document.body.classList.toggle("light-mode");

    // Change icon
    if (document.body.classList.contains("light-mode")) {

        icon.classList.remove("fa-moon");
        icon.classList.add("fa-sun");

    } else {

        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");

    }

};
```

}

// =====================
// TYPING ANIMATION
// =====================

const typingElement = document.querySelector(".typing");

if (typingElement) {

```
const text = [
    "Student",
    "NCC Cadet",
    "Web Designer"
];

let count = 0;
let index = 0;
let deleting = false;

function type() {

    const currentText = text[count];

    if (!deleting) {

        typingElement.textContent =
            currentText.slice(0, index + 1);

        index++;

        if (index === currentText.length) {

            deleting = true;

            setTimeout(type, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentText.slice(0, index - 1);

        index--;

        if (index === 0) {

            deleting = false;
            count++;

            if (count === text.length) {
                count = 0;
            }

        }

    }

    setTimeout(type, deleting ? 70 : 120);
}

type();
```

}
