import React from 'react';
import './style.scss';

function SpinningText({ text }) {
  const length = text.length;
  const deg = 360 / length;
  return (
    <div className="spinning_text">
      <div className="spinning_text-wapper">
        <p>
          {text.split('').map((letter, i) => (
            <span key={i} style={{ transform: `rotate(${deg * i}deg)` }}>
              {letter}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}

export default SpinningText;
