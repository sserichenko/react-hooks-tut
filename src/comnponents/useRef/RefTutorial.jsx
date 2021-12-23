import React, {useRef} from 'react';

const RefTutorial = () => {

    const inputRef = useRef(null);

    const handleBtnClick = () => {
        console.log(`Entered value is ${inputRef.current.value}`);
        inputRef.current.value = '';
    }

    const handleFocusInput = () => {
        inputRef.current.focus();
    }

    const handleUnfocusInput = () => {
        inputRef.current.blur();
    }

    return (
        <div>
            <h3>USE REF TUTORIAL</h3>
            <h4>Mario</h4>
            <input type="text" placeholder="Exm..." ref={inputRef}  />
            <button 
            onClick={handleBtnClick}
            onMouseEnter={handleFocusInput}
            onMouseLeave={handleUnfocusInput}
            >Change Name</button>
        </div>
    );
};

export default RefTutorial;