import React from "react";

import { range } from "../../utils";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";
import { checkGuess } from "../../game-helpers";

function PrevGuesses({guesses, answer}) {
  
  return (
    <div className="guess-results">
    {
      guesses.slice(1).map(({label, key}) => (
        <p 
          className="guess" 
          key={key}
        >
          {
            label.split('').map((letter, index) => <span key={index} className={`cell ${checkGuess(label, answer)[index].status}`}>{letter}</span>)
          }
        </p>
      ))
    }

    {
      range(0, NUM_OF_GUESSES_ALLOWED-guesses.length+1).map((_, index) => (
        <p className="guess" key={index}>
          {"     ".split('').map((letter, index) => <span key={index} className="cell">{letter}</span>)}
        </p>
      ))
    }
    </div>
  );
}

export default PrevGuesses;
