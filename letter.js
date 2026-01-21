const text = `Dear My Special Rose 🌹,

On this Rose Day, I want you to know
that just like a rose, you bring beauty,
fragrance, and happiness into my life.

Every moment with you feels special,
and every time i saw your smile i felt alive.

Happy Rose Day 💕
Forever Yours 💖`;

let index = 0;
const speed = 30;
const element = document.getElementById("letter-text");
const bouquet = document.getElementById("bouquet");

// Ensure image is hidden at start
bouquet.style.display = "none";

function typeLetter() {
    if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeLetter, speed);
    } else {
        bouquet.style.display = "block"; // show image AFTER typing
    }
}

typeLetter();
