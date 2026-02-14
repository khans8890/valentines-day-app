// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope
envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout(() => {
        document.querySelector(".letter-window").classList.add("open");
    }, 50);
});

// ===== MOBILE FIX: Function to move No button with boundary checking =====
function moveNoButton() {
    const buttonRect = noBtn.getBoundingClientRect();
    const letterWindow = document.querySelector(".letter-window");
    const windowRect = letterWindow.getBoundingClientRect();

    // Calculate available space
    const maxMoveX = (windowRect.width / 2) - (buttonRect.width / 2) - 40;
    const maxMoveY = (windowRect.height / 2) - (buttonRect.height / 2) - 40;

    // Generate random distance and angle
    const distance = Math.random() * 150 + 100; // Between 100-250px
    const angle = Math.random() * Math.PI * 2;

    // Calculate potential new position
    let moveX = Math.cos(angle) * distance;
    let moveY = Math.sin(angle) * distance;

    // Clamp to boundaries
    moveX = Math.max(-maxMoveX, Math.min(maxMoveX, moveX));
    moveY = Math.max(-maxMoveY, Math.min(maxMoveY, moveY));

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

// ===== DESKTOP: Keep original mouseover =====
noBtn.addEventListener("mouseover", moveNoButton);

// ===== MOBILE FIX: Add touch event for mobile devices =====
noBtn.addEventListener("touchstart", (e) => {
    e.preventDefault(); // Prevent default touch behavior
    moveNoButton();
});

// ===== MOBILE FIX: Add click/tap as fallback =====
noBtn.addEventListener("click", (e) => {
    e.preventDefault();
    moveNoButton();
});

// Yes button click
yesBtn.addEventListener("click", () => {
    title.textContent = "Yippeeee!";
    catImg.src = "cat_dance.gif";
    document.querySelector(".letter-window").classList.add("final");
    buttons.style.display = "none";
    finalText.style.display = "block";
});