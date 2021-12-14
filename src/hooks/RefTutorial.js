import React, { useRef } from "react";

const RefTutorial = () => {
  const inputRef = useRef("Name");

  return (
    <div className="container">
      <input type="text" placeholder="Name..." ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Change Name</button>
    </div>
  );
};

export default RefTutorial;
