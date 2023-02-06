import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import GuessInput from '../GuessInput';
import PrevGuesses from '../PrevGuesses/PrevGuesses';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([{'label':'', 'key':Math.random()}]);
  const [lockedInGuesses, setLockedInGuesses] = React.useState(0);

  function handleAddGuess (label) {
    const nextGuess = {label,  key: Math.random()};
    const nextGuesses = [...guesses, nextGuess];
    setGuesses(nextGuesses);
  }
  console.log(guesses[lockedInGuesses] || undefined)
  return (
    <>
      <PrevGuesses guesses={guesses} answer={answer} />
      <GuessInput guesses={guesses} handleAddGuess={handleAddGuess} lockedInGuesses={lockedInGuesses} setLockedInGuesses={setLockedInGuesses} answer={answer} />
      {
        guesses[lockedInGuesses].label === answer  
          && (
            <div className="happy banner">
              <p>
                <strong>Congratulations!</strong> Got it in
                <strong>{lockedInGuesses} guesses</strong>.
              </p>
            </div>
          )
      }
      {
        guesses[lockedInGuesses].label !== answer && lockedInGuesses === NUM_OF_GUESSES_ALLOWED
        && (
          <div className="sad banner">
            <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
          </div>
        )
      }
    </>
  );
}

export default Game;
