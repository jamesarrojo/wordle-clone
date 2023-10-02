import React, { useState } from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';

import InputText from '../InputText';
import GuessHistory from '../GuessHistory';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });
console.log(answer);
function Game() {
    const [input, setInput] = useState('');
    const [guessHistory, setGuessHistory] = useState([]);
    // console.log(input);
    // const guess = { guess: input.toUpperCase() };
    // console.log(guess);

    function handleInput(input) {
        setInput(input);
    }

    function handleSubmitGuess(e) {
        e.preventDefault();

        const newGuess = {
            guess: input,
            id: crypto.randomUUID(),
        };
        const nextGuessHistory = [...guessHistory, newGuess];
        setGuessHistory(nextGuessHistory);
        setInput('');
    }

    return (
        <>
            <GuessHistory guessHistory={guessHistory} answer={answer} />
            <InputText
                input={input}
                onInput={handleInput}
                onSubmitGuess={handleSubmitGuess}
                guessHistory={guessHistory}
                answer={answer}
            />
        </>
    );
}

export default Game;
