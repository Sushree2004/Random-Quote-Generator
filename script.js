const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "The power of imagination makes us infinite. - John Muir",
    "Stay hungry, stay foolish. - Steve Jobs",
    "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
    "The only impossible journey is the one you never begin. - Tony Robbins",
    "Arise, awake and stop not till the goal is reached. - Swami Vivekananda",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "The mind is everything. What you think you become. - Buddha",
    "You have to dream before your dreams can come true. - APJ Abdul Kalam"
  ];
  
  const quoteText = document.getElementById('quote-text');
  const generateBtn = document.getElementById('generate-btn');
  
  generateBtn.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quoteText.textContent = quotes[randomIndex];
  });