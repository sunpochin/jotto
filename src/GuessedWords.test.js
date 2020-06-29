import React from 'react';
import Enzyme, {shallow} from 'enzyme';

import { findByTestAttr, checkProps } from '../test/testUtils';

import GuessedWords from './GuessedWords';

const defaultProps = {
    guessedWords: [{ guessedWords: 'train', letterMatchCount: 3}],
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
    })
    // const wrapper = setup({guessedWords: []});
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'component-guessed-word');
        expect(component.length).toBe(1);
    })

    test('renders instructions to guess a word ', () => {
        const instuctions = findByTestAttr(wrapper, 'guess-instructions');
        expect(instuctions.text().length).not.toBe(0);
    })

});

describe('if there are words guessed', () => {
    test('renders without error', () => {})
});
