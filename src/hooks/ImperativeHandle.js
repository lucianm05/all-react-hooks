import React, { useRef } from "react";
import Button from "../components/Button";

const ImperativeHandle = () => {
  const buttonRef = useRef(null);

  return (
    <div className="container">
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button From Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};

export default ImperativeHandle;
