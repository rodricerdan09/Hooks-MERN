import React from 'react';
import PropTypes from 'prop-types';
// usar rafcp para crear un archivo react con PropTypes

const CounterApp = ({value}) => {
    return(
        <>
            <h1>CounterApp</h1>
            <h2> { value } </h2>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;