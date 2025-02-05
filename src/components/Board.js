import React from "react";
import Row from "./Row";

const Board = ({ guesses, word, currentGuess }) => {
  return (
    <div className="board">
      {guesses.map((guess, index) => (
        <Row key={index} word={word} guess={guess} />
      ))}
      {guesses.length < 6 && <Row guess={currentGuess} />}
    </div>
  );
};

export default Board;
