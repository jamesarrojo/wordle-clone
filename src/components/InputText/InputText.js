import React from 'react';

function InputText({ input, onInput, onSubmitGuess, guessHistory, answer }) {
    console.log(guessHistory[guessHistory.length - 1]);
    if (guessHistory[guessHistory.length - 1]?.['guess'] === answer)
        return (
            <div className="happy banner">
                <p>
                    <strong>Congratulations!</strong> Got it in{' '}
                    <strong>{guessHistory.length} guesses</strong>.
                </p>
            </div>
        );
    return (
        <form className="guess-input-wrapper" onSubmit={onSubmitGuess}>
            <label htmlFor="guess-input">Enter guess:</label>
            <input
                id="guess-input"
                type="text"
                value={input}
                onChange={(e) => onInput(e.target.value.toUpperCase())}
                pattern="^[A-Z]{5}$"
                required={true}
            />
        </form>
    );
}

export default InputText;
