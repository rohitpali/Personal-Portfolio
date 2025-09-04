// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// DarkKnight Chatbot
const chatBody = document.getElementById("chat-body");

// Messages to show sequentially
const messages = [
    "Hello! I am DarkKnight Chatbot, your AI assistant on this portfolio.",
    "Rohit is an MCA graduate with hands-on experience in Software Development, Machine Learning, Deep Learning, SQL, Power BI, Streamlit, Generative AI, and Data Visualization.",
    "He has built projects like Anime Recommender, Classify Gen, Courier Cost Analyzer, Financial Analysis, IPL Dashboard, Sales Insights, Type-1 Diabetes Predictor, and Complaint Classifier.",
    "You can explore his projects, skills, and contact him through GitHub, LinkedIn, HackerRank, or YouTube."
];

// Function to display one message at a time
function showMessagesSequentially(index = 0) {
    if (index >= messages.length) {
        // After last message, hide chat after 10 seconds
        setTimeout(() => {
            chatBody.style.display = "none";
        }, 10000);
        return;
    }

    // Show chat body
    chatBody.style.display = "block";

    // Clear previous message
    chatBody.innerHTML = "";

    // Create new message div
    const div = document.createElement("div");
    div.textContent = messages[index];
    chatBody.appendChild(div);
    chatBody.scrollTop = chatBody.scrollHeight;

    // Show next message after 5 seconds
    setTimeout(() => showMessagesSequentially(index + 1), 5000);
}

// Auto-run on page load and repeat every 2 minutes
function autoChat() {
    chatBody.innerHTML = ""; // Clear previous messages
    showMessagesSequentially();
    setTimeout(autoChat, 120000); // Repeat after 2 minutes
}

// Run auto chat 1 second after page load
window.onload = () => {
    setTimeout(autoChat, 1000);
};