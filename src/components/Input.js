/** @format */

import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";

const Input = ({ label, name, value, onChange, error = null, ...others }) => {
  const classes = useStyles();
  return (
    <TextField
      className={classes.inputBox}
      variant='outlined'
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      {...others}
      {...(error && { error: true, helperText: error })}
    />
  );
};

const useStyles = makeStyles(() => ({
  inputBox: {
    margin: '5px',
  },
}));
export default Input;
