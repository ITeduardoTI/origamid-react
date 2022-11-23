import React from "react";

const InputComponent = ({ id, label, value, setValue, ...props }) => {
  return(
    <>
      <label htmlFor={id}>{label}</label>
      <input 
        type="text" 
        id={id} 
        name={id} 
        value={value} 
        onChange={({ target }) => setValue(target.value)}
        {...props}
       />
    </>
  );
}

export default InputComponent;