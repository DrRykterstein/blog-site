import React from "react";
import { TextField, TextFieldProps, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(1),
  }
}));

const Input: React.FC<TextFieldProps> = ({
  children,
  color,
  label,
  name,
  value,
  error,
  helperText,
  onChange
}) => {
  const classes = useStyles();

  return (
    <TextField
      className={classes.root}
      variant="outlined"
      color={color || "primary"}
      label={label}
      name={name}
      value={value}
      error={error}
      helperText={helperText}
      onChange={onChange}
    >
      {children}
    </TextField>
  );
}

export default Input;