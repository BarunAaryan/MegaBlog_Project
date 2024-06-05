import React, { useId } from "react";

const Input = React.forwardRef(function Input(
  { label, type = "text", className = "", ...props },
  ref
) {
    const id= useId()
  return (
    <div className="w-full">
      {/* if label pass hua hai then label component will be displayed*/}
      {label && (
        <label className="inline-block mb-1" htmlFor={id}>
          {label}
        </label>
      )}
    </div>
  );
});

// function Input({

// }) {
//     const id = useId()
//   return (
//     <div>

//     </div>
//   )
// }

export default Input;
