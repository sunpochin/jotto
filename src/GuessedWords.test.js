import React from 'react';
import Enzyme, {shallow} from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';

import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{ guessed: 'train', letterMatchCount: 3}],
};

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props};
    return shallow(<GuessedWords {...setupProps}/>);
}


test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps);
});


describe('if there are no words guessed', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = setup({guessedWords: []});
    });
    // const wrapper = setup({guessedWords: []});
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('renders instructions to guess a word ', () => {
        const instuctions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instuctions.text().length).not.toBe(0);
    });

});

describe('if there are words guessed', () => {
    let wrapper;
    const guessedWords = [
        { guessed: 'train', letterMatchCount: 3 },
        { guessed: 'agile', letterMatchCount: 1 },
        { guessed: 'party', letterMatchCount: 5 },
    ];

    beforeEach(() => {
        wrapper = setup( { guessedWords } );
    });

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-words');
        expect(component.length).toBe(1);
    });

    test('renders "guess words" section', () => {
        const guessedWordsNode = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNode.length).toBe(1);
    });

    test('correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-words');
        expect(guessedWordsNodes.length).toBe(1);

    });

});
