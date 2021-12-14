import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { ...state, count: state.count + 1 };
    case "TOGGLE_SHOW_TEXT":
      return { ...state, showText: !state.showText };
    default:
      alert("Unexpected action type!");
      return state;
  }
};

const initialState = {
  count: 0,
  showText: true
};

const init = (initialState) => {
  return initialState;
};

const ReducerTutorial = () => {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  return (
    <div className="container">
      <h1>{state.count}</h1>
      <button
        onClick={() => {
          dispatch({ type: "INCREMENT" });
          dispatch({ type: "TOGGLE_SHOW_TEXT" });
        }}
      >
        Click here
      </button>
      {state.showText && <p>This is a text</p>}
    </div>
  );
};

export default ReducerTutorial;
