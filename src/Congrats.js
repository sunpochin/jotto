import React from 'react';

/**
 * Functional react component for congratulatory message
 * @function 
 * @param {object} props - React props
 * @returns {JSX.element} - Rendered component, or null if `success` prop if false.
 */

// const Congrats = (props) => {
export default(props) => {
    if (props.success) {
        return (
            <div data-test="component-congrats">
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

// Congrats.propTypes = {
//     success: Proptypes.bool.isRequired, 
// };


// export default Congrats;

