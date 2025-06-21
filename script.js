const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

// Option 1: Use local quotes array (no API)
const quotes = [
    { text: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
    { text: "Do one thing every day that scares you.", author: "Eleanor Roosevelt" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Hard work beats talent when talent doesn't work hard.", author: "Tim Notke" }
];

function getRandomQuote() {
  const random = Math.floor(Math.random() * quotes.length);
    const quote = quotes[random];
    quoteText.textContent = `"${quote.text}"`;
    quoteAuthor.textContent = `— ${quote.author}`;
}

// Load first quote
getRandomQuote();

// On button click
newQuoteBtn.addEventListener("click", getRandomQuote);
