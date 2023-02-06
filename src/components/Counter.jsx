import React, { useContext, useReducer } from "react";

// Actions
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Create context
const myContext = React.createContext(null);

const Points = () => {
  const state = useContext(myContext);

  return (
    <span>
      <b>Counter:</b> {state.count}
    </span>
  );
};

const Counter = () => {
  // Initial State for Reducer
  const initialState = {
    count: 0,
  };

  // Reducer to change State
  const reducer = (state, action) => {
    switch (action.type) {
      case INCREMENT:
        return {
          count: state.count + action.payload.quantity,
        };
      case DECREMENT:
        return {
          count: state.count - action.payload.quantity,
        };
      case RESET:
        return {
          count: 0,
        };
      default:
        return state;
    }
  };

  // Asign useReducer to state, reducer and dispatch actions
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementCount = () => {
    dispatch({
      type: INCREMENT,
      payload: {
        quantity: 2,
      },
    });
  };
  const decrementCount = () => {
    dispatch({
      type: DECREMENT,
      payload: {
        quantity: 1,
      },
    });
  };
  const resetCount = () => {
    dispatch({ type: RESET });
  };

  return (
    <myContext.Provider value={state}>
      <div className="rounded mx-auto my-5 col-4 col-md-4 shadow p-3 mb-5 d-flex flex-column align-items-center justify-content-center gap-3 p-3">
        <Points></Points>
        <button
          className="col-6 col-md-8 btn btn-danger btn-lg-danger"
          onClick={incrementCount}
        >
          {" "}
          INCREMENT * 2{" "}
        </button>
        <button
          className="col-6 col-md-8 btn btn-primary btn-lg-primary"
          onClick={decrementCount}
        >
          {" "}
          DECREMENT{" "}
        </button>
        <button
          className="col-6 col-md-8 btn btn-success btn-lg-success"
          onClick={resetCount}
        >
          {" "}
          RESET{" "}
        </button>
      </div>
    </myContext.Provider>
  );
};

export default Counter;
