import React from 'react';

function Keypad() {
    const handleButtonClick = (value) => {
        console.log(value);
    };

    const handleInputChange = () => {
        console.log('Entering password...');
    };

    return (
        <div className="keypad">
            <input type="password" onChange={handleInputChange} />
            {[...Array(10).keys()].map(number => (
                <button key={number} onClick={() => handleButtonClick(number)}>
                    {number}
                </button>
            ))}
        </div>
    );
}

export default Keypad;