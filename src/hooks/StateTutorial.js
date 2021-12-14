import React, { useState } from "react";

const StateTutorial = () => {
  const [counter, setCounter] = useState(() => 0);

  const increment = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div className="container">
      <p>{counter}</p>
      <div>
        <button onClick={increment}>Increment</button>
      </div>
    </div>
  );
};

export default StateTutorial;
