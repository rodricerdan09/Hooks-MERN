
import React from 'react';
import PropTypes from 'prop-types';
// import React, {Fragment} from 'react';

// const FirstApp = (props) => {  <h1> {props.greeting} </h1>}
const FirstApp = ({greeting = 'Hello World', subtitle = 'I\'m a subtitle', paragraph }) => {

    return(
        <>
            <h1> {greeting} </h1>
            {/* <pre>Hi {JSON.stringify(greetingObject, null, 3)} </pre> */}
            <h3> {subtitle} </h3>
            <p> {paragraph} </p>
        </>
    )
}

FirstApp.propTypes = {
    greeting: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
    paragraph: 'I\'m a paragraph'
}

export default FirstApp;