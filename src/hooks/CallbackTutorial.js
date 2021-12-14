import React, { useCallback, useState } from "react";
import Child from "../components/Child";

const CallbackTutorial = () => {
  const [toggle, setToggle] = useState(false);
  const [data, setData] = useState("Salut");

  const returnComment = useCallback((name) => data + name, [data]);

  return (
    <div className="container">
      <Child returnComment={returnComment} />
      <button onClick={() => setToggle((prevState) => !prevState)}>Toggle</button>
      {toggle && <h1>Toggled</h1>}
    </div>
  );
};

export default CallbackTutorial;
