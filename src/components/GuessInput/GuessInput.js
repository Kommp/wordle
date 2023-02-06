import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function GuessInput({guesses, handleAddGuess, lockedInGuesses, setLockedInGuesses, answer}) {
  const [inputValue, setInputValue] = React.useState('');

  return (
    <form 
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
      if(inputValue.length === 5){
        console.log({"guess": inputValue});
        if (lockedInGuesses < NUM_OF_GUESSES_ALLOWED){
          handleAddGuess(inputValue);
          setLockedInGuesses(lockedInGuesses + 1);
          setInputValue('');
        }
      }
        /*
        if(inputValue.length === 5){
          console.log({"guess": inputValue});
          setInputValue('');
        }
        */
        // else 
          // alert('Please enter a 5 letter guess!');
      }}
    >
      <label htmlFor="guess-input">Enter guess: </label>
      <input 
        required
        minLength={5}
        maxLength={5}
        id="guess-input" 
        type="text" 
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value.toUpperCase())}
        disabled={lockedInGuesses === NUM_OF_GUESSES_ALLOWED || guesses[lockedInGuesses].label === answer}
      />
    </form>
  );
}

export default GuessInput;
