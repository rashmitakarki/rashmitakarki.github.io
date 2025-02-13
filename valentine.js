function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️";
        document.querySelector(".heart-container").appendChild(heart);

        heart.style.left = `${Math.random() * 100}vw`;  // ✅ Fixed issue
        heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // ✅ Fixed issue

        setTimeout(() => {
            heart.remove(); // Remove heart after animation
        }, 5000);
    }

    document.addEventListener("DOMContentLoaded", () => {
        setInterval(createHeart, 300);
    });
    

    const questions = [
        { question: "What’s my love language?", answers: ["Gifts", "Caress", "Praise"], correct: "Caress" },
        { question: "Where did we go on our first date?", answers: ["BKT", "NYC", "KTM"], correct: "KTM" },
        { question: "What’s my dream vacation?", answers: ["UK", "Spain", "US"], correct: "Spain" }
    ];
    
    let currentQuestionIndex = 0;
    
    function checkAnswer(button) {
        let correctAnswer = questions[currentQuestionIndex].correct;
        if (button.innerText === correctAnswer) {
            document.getElementById("result").innerText = "Correct! 🎉";
        } else {
            document.getElementById("result").innerText = "Oops! Try again. 💔";
        }
        document.getElementById("next-question").style.display = "block";
    }
    
    function nextQuestion() {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            document.getElementById("question").innerText = questions[currentQuestionIndex].question;
            let options = document.getElementById("options").children;
            for (let i = 0; i < options.length; i++) {
                options[i].innerText = questions[currentQuestionIndex].answers[i];
            }
            document.getElementById("result").innerText = "";
            document.getElementById("next-question").style.display = "none";
        } else {
            document.getElementById("quiz-container").style.display = "none";
            document.getElementById("final-question").style.display = "block";
        }
    }
    
    function moveNoButton() {
        let noButton = document.getElementById("no-btn");
        let x = Math.random() * window.innerWidth * 0.6;
        let y = Math.random() * window.innerHeight * 0.6;
        noButton.style.transform = `translate(${x}px, ${y}px)`;
    }
    
    function showLoveMessage() {
        document.getElementById("final-question").style.display = "none";
        document.getElementById("love-message").style.display = "block";
        document.querySelector(".intro").remove();
    }
    