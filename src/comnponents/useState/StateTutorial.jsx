import React, {useState} from 'react';

const StateTutorial = () => {

    const [counter, setCounter] = useState(0);
    const [textValue, setTextValue] = useState('');

    const handleIncrement = () => {
        setCounter(prev => prev + 1)
    }

    const handleDecrement = () => {
        setCounter(prev => prev === 0 ? prev : prev - 1)
    }

    const handleInputChange = (event) => {
        setTextValue(event.target.value)
    }

    return (
        <>
        <div>
            <h3>USE STATE EXAMPLE COUNTER</h3>
            <button onClick={handleDecrement}>-</button>
            <span style={{ padding: '1rem'}}>{counter}</span>
            <button onClick={handleIncrement}>+</button>
        </div>
        <div>
            <input type="text" value={textValue} onChange={handleInputChange} placeholder='Enter some text...'/>
            <p>{textValue}</p>
        </div>
        </>
        
    );
};

export default StateTutorial;