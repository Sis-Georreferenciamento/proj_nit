import React from "react";
import * as C from "./styles";

const Input = ({ name, type, maxLength, placeholder, value, onChange }) => {
  return (
    <C.Input
      value={value}
      maxLength={maxLength}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};


export default Input;
