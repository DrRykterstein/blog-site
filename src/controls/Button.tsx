import React from "react";
import { Button as MuiButton, ButtonProps } from "@material-ui/core";

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  color,
  size,
  type
}) => {
  return (
    <MuiButton
      variant={variant || "contained"}
      color={color || "primary"}
      size={size || "large"}
      type={type}
    >
      {children}
    </MuiButton>
  );
}

export default Button;