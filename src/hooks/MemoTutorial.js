import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

const MemoTutorial = () => {
  const [data, setData] = useState(null);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments").then((response) => setData(response.data));
  }, []);

  const findLongestName = (comments) => {
    if (!comments) return null;

    let longestName = "";
    for (let i = 0; i < comments.length; i++) {
      let currentName = comments[i].name;
      if (currentName.length > longestName.length) {
        longestName = currentName;
      }
    }

    console.log("THIS WAS COMPUTED");

    return longestName;
  };

  const getLongestName = useMemo(() => findLongestName(data), [data]);

  return (
    <div className="container">
      <div>{getLongestName}</div>
      <button onClick={() => setToggle((prevState) => !prevState)}>Toggle</button>
      {toggle && <h1>Toggled</h1>}
    </div>
  );
};

export default MemoTutorial;
