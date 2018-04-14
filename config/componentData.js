module.exports = /* eslint-disable */ [{"name":"HelloWorld","description":"A super basic component to test the build and config files","props":{"message":{"type":{"name":"string"},"required":false,"description":"Message to display","defaultValue":{"value":"'World'","computed":false}}},"code":"import React from 'react';\r\nimport PropTypes from 'prop-types';\r\n\r\n/** A super basic component to test the build and config files */\r\nconst HelloWorld = (props) => {\r\n    return <div>Hello {props.message}</div>\r\n}\r\n\r\nHelloWorld.propTypes = {\r\n    /** Message to display */\r\n    message: PropTypes.string\r\n}\r\n\r\nHelloWorld.defaultProps = {\r\n    message: 'World'\r\n}\r\n\r\nexport default HelloWorld;","examples":[]}]