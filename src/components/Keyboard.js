import React from "react";

const Keyboard = ({ onKeyPress }) => {
  const keys = "QWERTYUIOPASDFGHJKLZXCVBNM".split("");

  return (
    <div className="keyboard">
      {keys.map((key) => (
        <button key={key} className="key" onClick={() => onKeyPress(key)}>
          {key}
        </button>
      ))}
      <button className="key enter" onClick={() => onKeyPress("ENTER")}>
        ⏎
      </button>
      <button className="key delete" onClick={() => onKeyPress("DELETE")}>
        ⌫
      </button>
    </div>
  );
};

export default Keyboard;
