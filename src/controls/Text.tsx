import React from "react";
import { Typography, TypographyProps } from "@material-ui/core";

const Text: React.FC<TypographyProps> = ({ 
  variant, 
  gutterBottom, 
  children, 
  color 
}) => {
  return (
    <Typography 
      variant={variant || "h6"}
      gutterBottom={gutterBottom || true}
      color={color}
    >
      {children}
    </Typography>
  );
}

export default Text;