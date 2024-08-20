import React from "react";

const Input = React.forwardRef(({ id, placeholder, errors, ...props }, ref) => {
  return (
    <div>
      <input
        id={id}
        placeholder={placeholder}
        ref={ref}
        {...props}
      />
      <div>{errors}</div>
    </div>
  );
});

export default Input;
