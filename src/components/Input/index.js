import React from "react";
import * as C from "./styles";

const Input = ({ type, maxLength, placeholder, value, onChange }) => {
  return (
    <C.Input
      value={value}
      maxLength={maxLength}
      onChange={onChange}
      type={type}
      placeholder={placeholder}
    />
  );
};


export default Input;
