function changeColors() {
    const body = document.body;

    // Define specific color combinations
    const colorCombinations = [
        { bgColor: "#3498db", textColor: "#ecf0f1" }, // Blue background, white text
        { bgColor: "#2ecc71", textColor: "#ecf0f1" }, // Green background, white text
        { bgColor: "#e74c3c", textColor: "#ecf0f1" }, // Red background, white text
        { bgColor: "#f39c12", textColor: "#2c3e50" }, // Orange background, dark text
        { bgColor: "#FF6961", textColor: "#AEC6CF" },  // Red background, Blue text
        { bgColor: "#9b59b6", textColor: "#ecf0f1" }  // Purple background, white text
    ];

    // Choose a random color combination
    const randomIndex = Math.floor(Math.random() * colorCombinations.length);
    const chosenCombination = colorCombinations[randomIndex];

    body.style.backgroundColor = chosenCombination.bgColor;
    body.style.color = chosenCombination.textColor;
}
