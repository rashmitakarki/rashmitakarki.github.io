document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submit-btn");
    const message = document.getElementById("message");
    
    submitBtn.addEventListener("click", function () {
        const q1 = document.getElementById("q1").value.trim().toLowerCase();
        const q2 = document.getElementById("q2").value.trim().toLowerCase();
        const q3 = document.getElementById("q3").value.trim().toLowerCase();

        const answers = {
            q1: "pizza", 
            q2: "jersey", 
            q3: "wednesday",
        };
        
        if (q1 === answers.q1 && q2 === answers.q2 && q3 === answers.q3) {
            message.textContent = "Correct! Moving to the next step...";
            message.style.color = "green";
            setTimeout(() => {
                window.location.href = "puzzle.html";
            }, 2000);
        } else {
            message.textContent = "Oops! Try again.";
            message.style.color = "red";
        }
    });
});


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
