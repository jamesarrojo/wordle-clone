import React from 'react';
import { range } from '../../utils';
import { NUM_OF_GUESSES_ALLOWED } from '../../constants';
import { checkGuess } from '../../game-helpers';

function GuessHistory({ guessHistory, answer }) {
    // console.log(guessHistory);
    return (
        <div className="guess-results">
            {guessHistory.map(({ guess, id }) => (
                <p className="guess" key={id}>
                    {range(5).map((el, idx) => (
                        <span
                            className={`cell ${
                                checkGuess(guess, answer)[idx]['status']
                            }`}
                            key={idx}
                        >
                            {guess[idx]}
                        </span>
                    ))}
                </p>
            ))}
            {range(NUM_OF_GUESSES_ALLOWED - guessHistory.length).map(
                (el, idx) => (
                    <p className="guess" key={idx}>
                        <span className="cell"></span>
                        <span className="cell"></span>
                        <span className="cell"></span>
                        <span className="cell"></span>
                        <span className="cell"></span>
                    </p>
                )
            )}
        </div>
    );
}

export default GuessHistory;
