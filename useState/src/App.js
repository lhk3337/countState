import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
function App() {
  const [state, setState] = useState(0);

  const increment = () => {
    setState(state + 1);
  };
  const decrement = () => {
    setState(state - 1);
  };

  return <Counter data={state} increment={increment} decrement={decrement} />;
}

export default App;
