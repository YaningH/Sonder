let lastWordTime = 0; // Store the last time a word appeared
const wordCooldown = 200; // Time in milliseconds (adjust to control frequency)

document.addEventListener("mousemove", (e) => {
    const currentTime = Date.now();

    // If enough time hasn't passed, do nothing
    if (currentTime - lastWordTime < wordCooldown) {
        return;
    }

    lastWordTime = currentTime; // Update last word time

    const words = [
        "EXISTENCE", 
        "ECHO", 
        "THE OTHER PERSON", 
        "OBSCURE SORROWS", 
        "REALIZATION", 
        "JOHN KOENIG", 
        "HARMONY", 
        "COSMIC INSIGNIFICANCE"
    ];

    const randomWord = words[Math.floor(Math.random() * words.length)]; // Pick a random word

    const textElement = document.createElement("div");
    textElement.classList.add("cursor-text");
    textElement.innerText = randomWord;

    document.body.appendChild(textElement);

    // Slightly offset the text position so they don’t overlap
    const offsetX = (Math.random() - 0.5) * 50; // Random offset between -25px to +25px
    const offsetY = (Math.random() - 0.5) * 50;
    

    textElement.style.left = `${e.clientX + offsetX}px`;
    textElement.style.top = `${e.clientY + offsetY}px`;

    // Animate the text (fade out and move up)
    setTimeout(() => {
        textElement.style.opacity = 0;
        textElement.style.transform += " translateY(-20px)"; // Keep rotation while moving up
    }, 100);
    

    // Remove after animation
    setTimeout(() => {
        textElement.remove();
    }, 1000);
});
