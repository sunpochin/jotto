/**
 * @method getLetterMatchCount
 * @param {string} guessedWord - Guessed Word
 * @param {string} secretWord - Secret Word
 * @returns {number} - Number of letters matched before guessed word
 */
export function getLetterMatchCount(guessedWord, secretWord) {
    const secretLetterSet = new Set(secretWord.split('') );
    const guessedLetterSet = new Set(guessedWord.split('') );
    console.log('secretLetterSet: ', secretLetterSet);
    console.log('guessedLetterSet: ', guessedLetterSet);
    return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length;

};

