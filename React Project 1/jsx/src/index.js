// impport react and reactDOM libraiers

//https://github.com/StephenGrider/redux-code
import React from 'react';
import ReactDOM from 'react-dom';


function GetText() {
    return 'Hello There'
}


//create react component
const App = () => {
    const buttonText = 'Click Me!' //variable
    return (
        <div>
            <label className='label' htmlFor='name'>Enter Name:</label>
            <input id='name' type='text' />
            <button style={{ backgroundColor: 'blue', color: 'white' }}>
                {buttonText}
            </button>
            <button style={{ backgroundColor: 'red', color: 'white' }}>
                {GetText()}
            </button>
        </div>
    );
}

// Take the react component and show it on the screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
) //we pass 2 arguments, our element and our html filenpm