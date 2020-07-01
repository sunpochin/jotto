import React from 'react';
import PropTypes from 'prop-types';

/**
 * Functional react component for congratulatory message
 * @function 
 * @param {object} props - React props
 * @returns {JSX.element} - Rendered component, or null if `success` prop if false.
 */

const Congrats = (props) => {
    if (props.success) {
        return (
            <div data-test="component-congrats" className="alert alert-success">
                <span data-test="component-message">
                    Congratulations! You guessed the WORD!
                </span>
            </div>
        );
    } else {
        return (
            <div data-test="component-congrats"/>
        );
    }
}

Congrats.propTypes = {
    success: PropTypes.bool.isRequired, 
};


export default Congrats;

