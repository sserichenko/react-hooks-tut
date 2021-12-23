import React, { useReducer } from 'react';


const reducer = (state, action) => {
    switch(action.type){
        case 'INCREMENT_COUNT': 
            return {
                ...state,
                count: state.count + 1
            }
        case 'TOGGLE_TEXT': 
        return {
            ...state,
            showText: !state.showText
        }
        default: 
            return state
    }
}

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0, showText: true });

  return (
    <div>
      <h3>USE REDUCER TUTORIAL</h3>
      <h4>{state.count}</h4>
      <button
        onClick={() => {
          dispatch({type: 'INCREMENT_COUNT'});
          dispatch({type: 'TOGGLE_TEXT'});
        }}>
        Click Here
      </button>
      {state.showText && <p>This is example text</p>}
    </div>
  );
};

export default ReducerTutorial;
