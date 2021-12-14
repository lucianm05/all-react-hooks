import React, { useEffect, useState } from "react";
import axios from "axios";

const EffectTutorial = () => {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => {
      setData(response.data[(Math.random() * 500).toFixed()].email);
    });
  }, [count]);

  return (
    <div className="container">
      Hello World!
      <h1>{data}</h1>
      <p>{count}</p>
      <button onClick={() => setCount((prevState) => prevState + 1)}>Click</button>
    </div>
  );
};

export default EffectTutorial;
