import React, { useEffect, useLayoutEffect, useRef } from "react";

const LayoutEffectTutorial = () => {
  const inputRef = useRef();

  useEffect(() => {
    inputRef.current.value = "HELLO";
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");
    console.log(inputRef.current.value);
  }, []);

  return (
    <div className="container">
      <input ref={inputRef} defaultValue="Luci" />
    </div>
  );
};

export default LayoutEffectTutorial;
