import React from 'react';
import { Formik, Form, Field, FieldArray } from 'formik';
import TextField from '../TextField';

// import Button from '../Button';
import {
  Grid,
  Typography,
  FormControlLabel,
  Switch,
  Theme,
  Divider
} from '@material-ui/core';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  switchContainer: {
    padding: theme.spacing(1)
  }
}));

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid emails address')
    .required('Email is required')
});

interface Traveller {
  title: string;
  fullName: string;
  dateOfBirth: Date;
  hasPassport: boolean;
  country: string;
  passportNumber: string;
  expiry: Date;
}

const getInitialTraveller = (noOfTravellers: number): Array<Traveller> => {
  let arr = [];
  let traveller = {
    title: '',
    fullName: '',
    dateOfBirth: new Date(),
    hasPassport: false,
    country: '',
    passportNumber: '',
    expiry: new Date()
  };
  for (let i = 0; i <= noOfTravellers - 1; i++) {
    arr.push(traveller);
  }

  return arr;
};

const TravellerForm: React.SFC = () => {
  const classes = useStyles();
  return (
    <div>
      <Formik
        initialValues={{
          travellers: getInitialTraveller(2)
        }}
        validationSchema={FormSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {({ values, handleChange }) => (
          <Form>
            <Grid container spacing={2}>
              <FieldArray name="travellers">
                {() => (
                  <React.Fragment>
                    {values.travellers && values.travellers.length > 0
                      ? values.travellers.map((_, index) => (
                          <React.Fragment key={index}>
                            <Grid item xs={12} md={4}>
                              <Typography
                                variant="subtitle1"
                                style={{ fontWeight: 'bold' }}
                              >
                                Traveller {index + 1}
                              </Typography>
                            </Grid>

                            <Grid item xs={12} md={8}>
                              <Field
                                label="Title"
                                type="text"
                                name={`travellers.${index}.title`}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                component={TextField}
                              />

                              <Field
                                label="Name"
                                type="text"
                                name={`travellers.${index}.fullName`}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                component={TextField}
                              />

                              <Field
                                label="Date of Birth"
                                type="text"
                                name={`travellers.${index}.dateOfBirth`}
                                margin="normal"
                                variant="outlined"
                                fullWidth
                                component={TextField}
                              />
                            </Grid>
                            <Grid
                              container
                              justify="flex-end"
                              className={classes.switchContainer}
                            >
                              <FormControlLabel
                                control={
                                  <Switch
                                    name={`travellers.${index}.hasPassport`}
                                    color="primary"
                                    onChange={handleChange}
                                  />
                                }
                                label="Do you have your passport details?"
                                labelPlacement="start"
                              />
                            </Grid>
                            {values.travellers[index].hasPassport && (
                              <React.Fragment>
                                <Grid item xs={12} md={4}></Grid>
                                <Grid item xs={12} md={8}>
                                  <Field
                                    label="Country"
                                    type="text"
                                    name={`travellers.${index}.country`}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    component={TextField}
                                  />

                                  <Field
                                    label="Passport Number"
                                    type="text"
                                    name={`travellers.${index}.passportNumber`}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    component={TextField}
                                  />

                                  <Field
                                    label="Expiry"
                                    type="text"
                                    name={`travellers.${index}.expiry`}
                                    margin="normal"
                                    variant="outlined"
                                    fullWidth
                                    component={TextField}
                                  />
                                </Grid>
                              </React.Fragment>
                            )}
                            <Grid item xs={12} md={4}></Grid>
                            <Grid item xs={12} md={8}>
                              <Divider style={{ width: '100%' }} />
                            </Grid>
                          </React.Fragment>
                        ))
                      : null}
                  </React.Fragment>
                )}
              </FieldArray>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default TravellerForm;
