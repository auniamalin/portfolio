// typing animation
const words = [
    "Auni Amalin",
];

let wordIndex = 0;
let charIndex = 0;
let currentWord = "";
let isDeleting = false;

const typingText =
document.getElementById("typing-text");

function type() {

    currentWord = words[wordIndex];

    if(!isDeleting){

        typingText.textContent =
        currentWord.substring(0, charIndex + 1);

        charIndex++;

        if(charIndex === currentWord.length){

            isDeleting = true;

            setTimeout(type, 1500);
            return;
        }

    } else {

        typingText.textContent =
        currentWord.substring(0, charIndex - 1);

        charIndex--;

        if(charIndex === 0){

            isDeleting = false;

            wordIndex++;

            if(wordIndex === words.length){
                wordIndex = 0;
            }
        }
    }

    setTimeout(type,
        isDeleting ? 50 : 100
    );
}

type();


document.addEventListener("DOMContentLoaded", () => {

    const items = document.querySelectorAll(".timeline-item");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, {
        threshold: 0.2
    });

    items.forEach(item => {
        observer.observe(item);
    });

});