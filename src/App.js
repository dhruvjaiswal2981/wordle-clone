import React, { useState, useEffect } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { getRandomWord } from "./utils/words";
import "./App.css";

const App = () => {
  const [word, setWord] = useState(getRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameStatus, setGameStatus] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const handleKeyPress = (key) => {
    if (gameStatus) return;

    if (key === "ENTER") {
      if (currentGuess.length !== 5) return;
      if (guesses.includes(currentGuess)) return;

      const newGuesses = [...guesses, currentGuess];

      setGuesses(newGuesses);
      setCurrentGuess("");

      if (currentGuess === word) {
        setGameStatus("win");
      } else if (newGuesses.length === 6) {
        setGameStatus("lose");
      }
      return;
    }

    if (key === "DELETE") {
      setCurrentGuess((prev) => prev.slice(0, -1));
      return;
    }

    if (currentGuess.length < 5 && /^[A-Z]$/.test(key)) {
      setCurrentGuess((prev) => prev + key.toLowerCase());
    }
  };

  const restartGame = () => {
    setWord(getRandomWord());
    setGuesses([]);
    setCurrentGuess("");
    setGameStatus("");
  };

  return (
    <div className="container">
      <button className="toggle-mode" onClick={() => setIsDarkMode(!isDarkMode)}>
        {isDarkMode ? "☀ Light Mode" : "🌙 Dark Mode"}
      </button>
      <h1>Wordle Clone</h1>
      {gameStatus && (
        <div className={`message ${gameStatus}`}>
          {gameStatus === "win" ? `🎉 You Won! The word was ${word.toUpperCase()}` : `😢 You Loss! The word was ${word.toUpperCase()}`}
          <button onClick={restartGame}>New Game</button>
        </div>
      )}
      <Board guesses={guesses} word={word} currentGuess={currentGuess} />
      <Keyboard onKeyPress={handleKeyPress} />
    </div>
  );
};

export default App;
