import React, {useState} from 'react';
import PropTypes from 'prop-types';
// usar rafcp para crear un archivo react con PropTypes

const CounterApp = ({value}) => {

    const [counter, setCounter] = useState(value); // [value, function]

    const handleAdd = () => {
        // setCounter(counter +1);
        setCounter( (counter) => counter + 1)
    }
    const handleReset = () => {
        setCounter( (counter) => counter = value)
    }
    const handleSubstract = () => {
        setCounter( (counter) => counter - 1)
    }

    return(
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>
            {/* Se pasa la funcion por referencia  */}
            <button onClick={ handleAdd }>+1</button>
            <button onClick={ handleReset }>Reset</button>
            <button onClick={ handleSubstract }>-1</button>
        </>
    );
};

CounterApp.propTypes = {
    value: PropTypes.number
}

export default CounterApp;