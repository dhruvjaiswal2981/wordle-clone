import React from "react";

const Row = ({ guess = "", word }) => {
  const letters = guess.padEnd(5, " ").split("");

  return (
    <div className="row">
      {letters.map((char, i) => {
        let className = "tile";
        if (word && char !== " ") {
          if (char === word[i]) {
            className += " correct";
          } else if (word.includes(char)) {
            className += " present";
          } else {
            className += " absent";
          }
        }
        return (
          <span key={i} className={className}>
            {char.toUpperCase()}
          </span>
        );
      })}
    </div>
  );
};

export default Row;
