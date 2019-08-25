import React from "react";
import { Formik, Form, Field } from "formik";
import { Grid, makeStyles, InputLabel } from "@material-ui/core";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import "date-fns";
import TextField from "./TextField";
import Button from "./Button";
import Typography from "./Typography";

const useStyles = makeStyles(theme => ({
  form: {
    maxWidth: 352,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(3),
    borderRadius: 2 * theme.shape.borderRadius
  },
  formTitle: {
    fontWeight: 500
  },
  label: {
    color: "#fff",
    textAlign: "left",
    marginBottom: theme.spacing(1)
  }
}));

const DatePickerField = (props: any) => {
  const currentError = props.form.errors[props.field.name];

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container>
        <DatePicker
          fullWidth
          disablePast
          InputProps={{ disableUnderline: true }}
          name={props.field.name}
          value={props.field.value}
          format="dd/MM/yyyy"
          TextFieldComponent={TextField}
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

const QuickForm = () => {
  const classes = useStyles();
  return (
    <Formik onSubmit={console.log} initialValues={{ date: new Date() }}>
      {() => (
        <Form className={classes.form}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle1" className={classes.formTitle}>
                Book your visit to Bhutan with us!
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
              <TextField fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button color="secondary" variant="contained" fullWidth>
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
