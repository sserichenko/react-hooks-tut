import React, { useEffect, useLayoutEffect, useRef } from 'react';

const LayoutEffectTutorial = () => {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = 'HELLO';
  }, []);

  return (
    <div>
      <h3>USE LAYOUT EFFECT</h3>
      <input ref={inputRef} value="PEDRO" style={{ width: 400, height: 60 }} onChange={() => {}}/>
    </div>
  );
};

export default LayoutEffectTutorial;
