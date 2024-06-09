const quotes = [
    "The only way to do great work is to love what you do. ",
    "Life is what happens when you're busy making other plans. ",
    "In the end, it's not the years in your life that count. It's the life in your years. ",
    "Life is 10% what happens to us and 90% how we react to it. ",
    "Believe you can and you're halfway there.",
    "The only limit to our realization of tomorrow will be our doubts of today. ",
    "It does not matter how slowly you go as long as you do not stop. ",
    "You are never too old to set another goal or to dream a new dream. ",
    "The best time to plant a tree was 20 years ago. The second best time is now.",
    "The future belongs to those who believe in the beauty of their dreams. ",
    "Never get distressed or you get depressed",
    
];

// Function to generate random quote
function generateQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote").innerText = quotes[randomNumber];
}

// Event listener for button click
document.getElementById("generateBtn").addEventListener("click", generateQuote);
