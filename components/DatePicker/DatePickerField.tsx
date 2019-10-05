import React from 'react';
import { DateRangeTwoTone } from '@material-ui/icons';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import Grid from '@material-ui/core/Grid';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  inputStyle: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius
  },
  label: {
    color: '#fff',
    textAlign: 'left',
    marginBottom: theme.spacing(1)
  },
  buttonContainer: {
    marginTop: theme.spacing(2)
  },
  inputRoot: {
    padding: theme.spacing(1, 0)
  }
}));

export default function DatePickerField(props: any) {
  const { datePickerStyles, ...otherProps } = props;
  const classes = useStyles();
  const currentError = props.form.errors[props.field.name];

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <DatePicker
          className={clsx(classes.inputStyle, datePickerStyles)}
          fullWidth
          disablePast
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <DateRangeTwoTone />
              </InputAdornment>
            ),
            classes: {
              input: classes.inputRoot
            }
          }}
          name={props.field.name}
          value={props.field.value}
          format={props.format}
          TextFieldComponent={props.TextFieldComponent}
          helperText={currentError}
          error={Boolean(currentError)}
          onError={error => {
            if (error !== currentError) {
              props.form.setFieldError(props.field.name, error);
            }
          }}
          onChange={date =>
            props.form.setFieldValue(props.field.name, date, false)
          }
          {...otherProps}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
