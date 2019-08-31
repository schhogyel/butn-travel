import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Grid,
  makeStyles,
  InputLabel,
  MenuItem,
  InputAdornment,
  TextField
} from "@material-ui/core";
import { DateRangeTwoTone, PeopleTwoTone } from "@material-ui/icons";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import "date-fns";
import Button from "./Button";
import Typography from "./Typography";
// import { TextField } from "formik-material-ui";

const useStyles = makeStyles(theme => ({
  form: {
    maxWidth: 365,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    borderRadius: 2 * theme.shape.borderRadius
  },
  formTitle: {
    fontWeight: 500,
    color: "#fff"
  },
  inputStyle: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.common.white
  },
  label: {
    color: "#fff",
    textAlign: "left",
    marginBottom: theme.spacing(1)
  },
  buttonContainer: {
    marginTop: theme.spacing(2)
  }
}));

const DatePickerField = (props: any) => {
  const classes = useStyles();
  const currentError = props.form.errors[props.field.name];

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <DatePicker
          className={classes.inputStyle}
          fullWidth
          disablePast
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <DateRangeTwoTone />
              </InputAdornment>
            )
          }}
          name={props.field.name}
          value={props.field.value}
          format="eee dd/MM/yyyy"
          // TextFieldComponent={TextField}
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
          {...props}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
};

const ranges = getNumberOfGuest(10);

function getNumberOfGuest(num: number) {
  let guestRanges = [];
  for (let i = 1; i <= num; i++) {
    guestRanges.push({ value: `${i}`, label: `${i}` });
  }
  return guestRanges;
}

const CustomSelect = (props: any) => {
  const classes = useStyles();
  return (
    <TextField
      select
      fullWidth
      className={classes.inputStyle}
      name={props.field.name}
      value={props.field.value}
      onChange={(event: any) =>
        props.form.setFieldValue(props.field.name, event.target.value, false)
      }
      InputProps={{
        disableUnderline: true,
        startAdornment: (
          <InputAdornment position="start">
            <PeopleTwoTone />
          </InputAdornment>
        )
      }}
    >
      {ranges.map(option => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
};

const QuickForm = () => {
  const classes = useStyles();
  return (
    <Formik
      onSubmit={console.log}
      initialValues={{
        arrival: new Date(),
        departure: new Date(),
        guests: ""
      }}
    >
      {() => (
        <Form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h5" className={classes.formTitle}>
                Book Your Visit
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <InputLabel className={classes.label}> Arrival</InputLabel>
              <Field name="arrival" component={DatePickerField} />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className={classes.label}> Departure</InputLabel>
              <Field name="departure" component={DatePickerField} />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className={classes.label}> Guests</InputLabel>
              <Field name="guests" component={CustomSelect} />
            </Grid>
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                fullWidth
              >
                Book Now
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default QuickForm;
