import React from 'react';
import { makeStyles, MenuItem, TextField } from '@material-ui/core';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  inputStyle: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius
  },
  inputRoot: {
    padding: theme.spacing(1, 0)
  }
}));

export default (props: any) => {
  const classes = useStyles(props);
  return (
    <TextField
      select
      fullWidth
      className={clsx(classes.inputStyle, props.inputStyle)}
      value={props.field.value}
      onChange={(event: any) =>
        props.form.setFieldValue(props.field.name, event.target.value, false)
      }
      InputProps={{
        disableUnderline: true,
        classes: {
          input: classes.inputRoot
        },
        ...props.InputProps
      }}
      {...props}
    >
      {props.options.map((option: any) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};
