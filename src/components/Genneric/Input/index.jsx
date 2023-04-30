import React from "react";
import { Container } from "./style";

const Input = ({
  type,
  onChange,
  placeholder,
  name,
  defaultValue,
  value,
  width,
  height,
}) => {
  return (
    <Container
      placeholder={placeholder}
      name={name}
      value={value}
      defaultValue={defaultValue}
      onChange={onChange}
      width={100}
      type={type}
      width={width}
      height={height}
    />
  );
};

export default Input;
