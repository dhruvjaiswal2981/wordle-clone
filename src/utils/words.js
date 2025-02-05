export const WORDS = [
    "apple", "table", "chair", "house", "light", "money", "tiger"
  ];
  
  export const getRandomWord = () => WORDS[Math.floor(Math.random() * WORDS.length)];
  