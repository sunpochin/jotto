
import checkPropTypes from 'check-prop-types';

/**
 * Return nodes with the given data-test attribute.
 * @param {ShallowWrapper} wrapper 
 * @param {*} val 
 * @requires {ShallowWrapper}
 */
export const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test="${val}"]`);
}

export const checkProps = (component, conformingProps) => {
    const propError = checkPropTypes(
        component.propTypes,
        conformingProps,
        'prop',
        component.name);

    expect(propError).toBeUndefined();
}


