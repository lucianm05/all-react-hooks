import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef(({}, ref) => {
  const [toggle, setToggle] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setToggle((prevState) => !prevState);
    }
  }));

  return (
    <>
      <button>Button From Child</button>
      {toggle && <span>Toggle</span>}
    </>
  );
});

export default Button;
