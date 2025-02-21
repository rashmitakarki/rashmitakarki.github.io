document.addEventListener("DOMContentLoaded", function () {
    const heartContainer = document.createElement("div");
    heartContainer.classList.add("hearts-container");
    document.body.appendChild(heartContainer);

    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerText = "💖"; // Heart emoji

        // Randomize position
        heart.style.left = Math.random() * 100 + "vw";

        // Randomize size
        const size = Math.random() * 30 + 20; // Between 20px and 50px
        heart.style.fontSize = size + "px";

        // Randomize animation duration
        const duration = Math.random() * 3 + 3; // Between 3s and 6s
        heart.style.animationDuration = duration + "s";

        heartContainer.appendChild(heart);

        // Remove heart after animation ends
        setTimeout(() => {
            heart.remove();
        }, duration * 1000);
    }

    // Create hearts at intervals
    setInterval(createHeart, 400);
});

document.addEventListener("DOMContentLoaded", function () {
    const audio = document.getElementById("bg-music");

    // Attempt to autoplay when the page loads
    audio.play().catch(() => {
        console.log("Autoplay blocked. Waiting for user interaction...");
    });

    // Play music when user interacts (click/tap)
    document.body.addEventListener("click", () => {
        audio.play();
    }, { once: true }); // Ensures it runs only once
});
