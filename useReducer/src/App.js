import React, { useReducer } from "react";
import Counter from "./components/Counter";
function App() {
  const INCREMENT = "counter/INCREMENT";
  const DECREMENT = "count/DECREMENT";
  function reducer(state, action) {
    switch (action.type) {
      case INCREMENT:
        return state + 1;
      case DECREMENT:
        return state - 1;
      default:
        return state;
    }
  }
  const [numbers, dispatch] = useReducer(reducer, 0);

  const increment = () => {
    dispatch({ type: INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  return <Counter data={numbers} increment={increment} decrement={decrement} />;
}

export default App;
