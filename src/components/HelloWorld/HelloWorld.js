import React from 'react';
import PropTypes from 'prop-types';

/** A super basic component to test the build and config files */
const HelloWorld = (props) => {
    return <div>Hello {props.message}</div>
}

HelloWorld.propTypes = {
    /** Message to display */
    message: PropTypes.string
}

HelloWorld.defaultProps = {
    message: 'World'
}

export default HelloWorld;