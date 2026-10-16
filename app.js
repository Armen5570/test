
const helloBtn = document.getElementById("helloBtn");
const magicBtn = document.getElementById("magicBtn");
const message = document.getElementById("message");
const year = document.getElementById("year");

year.textContent = new Date().getFullYear();

helloBtn.addEventListener("click", () => {
    alert("Hello! Welcome to PinkSpace. 💗");
});

magicBtn.addEventListener("click", () => {
    const messages = [
        "Keep creating. Your ideas matter! ✨",
        "Every expert was once a beginner. 💗",
        "Your next project could be amazing! 🚀",
        "Keep learning and never stop building! 🌸"
    ];

    const randomIndex = Math.floor(Math.random() * messages.length);
    message.textContent = messages[randomIndex];
});
