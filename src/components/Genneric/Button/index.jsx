import React from "react";
import { Container } from "./style";

const Button = ({ children, type, onClick, width, heigth }) => {
  return (
    <Container
      onClick={onClick}
      width={100}
      type={type}
      width={width}
      heigth={heigth}
    >
      {children || "Generic Button"}
    </Container>
  );
};

export default Button;
