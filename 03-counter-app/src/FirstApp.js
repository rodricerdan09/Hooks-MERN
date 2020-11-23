import React from 'react';
// import React, {Fragment} from 'react';

const FirstApp = () => {

    const greeting = 'Hello World';

    // eslint-disable-next-line no-unused-vars
    const greetingObject = {
        name: 'Rodrigo',
        surname: 'Cerdan'
    }

    return(
        <>
            <h1> {greeting} </h1>
            {/* <pre>Hi {JSON.stringify(greetingObject, null, 3)} </pre> */}
            <p>First App</p>
        </>
    )
}
export default FirstApp;