import React from 'react';
import { Formik, Form, Field } from 'formik';
import Router from 'next/router';
import {
  Grid,
  makeStyles,
  InputLabel,
  InputAdornment
} from '@material-ui/core';
import 'date-fns';
import Button from './Button';
import Typography from './Typography';
import JourneyContext from '../pages/JourneyContext';

import DatePickerField from './DatePicker/DatePickerField';
import CustomSelect from './TextField/CustomSelect';
import { PeopleTwoTone } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  form: {
    maxWidth: 365,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    borderRadius: 2 * theme.shape.borderRadius
  },
  formTitle: {
    fontWeight: 500,
    color: '#fff'
  },
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
  }
}));

const ranges = getNumberOfGuest(10);

function getNumberOfGuest(num: number) {
  let guestRanges = [];
  for (let i = 1; i <= num; i++) {
    guestRanges.push({ value: `${i}`, label: `${i}` });
  }
  return guestRanges;
}

const QuickForm = () => {
  const classes = useStyles();
  const { setJourney } = React.useContext(JourneyContext);

  return (
    <Formik
      onSubmit={values => {
        setJourney({
          arrivalDate: values.arrival,
          departureDate: values.departure,
          noOfTravellers: Number(values.guests)
        });
        Router.push('/booking');
      }}
      initialValues={{
        arrival: new Date(),
        departure: new Date(),
        guests: '1'
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
              <Field
                name="arrival"
                component={(props: any) => (
                  <DatePickerField format={'eee dd/MM/yyyy'} {...props} />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className={classes.label}> Departure</InputLabel>
              <Field
                name="departure"
                component={(props: any) => (
                  <DatePickerField format={'eee dd/MM/yyyy'} {...props} />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <InputLabel className={classes.label}> Guests</InputLabel>
              <Field
                name="guests"
                component={(props: any) => (
                  <CustomSelect
                    options={ranges}
                    InputProps={{
                      disableUnderline: true,
                      startAdornment: (
                        <InputAdornment position="start">
                          <PeopleTwoTone />
                        </InputAdornment>
                      )
                    }}
                    {...props}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12} className={classes.buttonContainer}>
              <Button
                type="submit"
                color="secondary"
                variant="contained"
                size="large"
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
