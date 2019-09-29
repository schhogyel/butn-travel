import React from 'react';
import { Formik, Form, Field } from 'formik';
import TextField from '../TextField';
// import Button from '../Button';
import { Grid, Typography, FormControlLabel, Switch } from '@material-ui/core';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid emails address')
    .required('Email is required')
});

const TravellerForm: React.SFC = () => (
  <div>
    <Formik
      initialValues={{ email: '', password: '', hasPassport: false }}
      validationSchema={FormSchema}
      onSubmit={(values, { setSubmitting }) => {
        console.log(values);
        setSubmitting(false);
      }}
    >
      {() => (
        <Form>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                Adult 1
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Field
                label="Title"
                type="text"
                name="title"
                margin="normal"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                label="Name"
                type="text"
                name="fullName"
                margin="normal"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                label="Date of Birth"
                type="text"
                name="dateOfBirth"
                margin="normal"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
            <FormControlLabel
              control={<Switch name="hasPassport" color="primary" />}
              label="Do you have your passport details?"
              labelPlacement="start"
            />
            <Grid item xs={12}>
              <Field
                label="Country"
                type="text"
                name="country"
                margin="normal"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                label="Passport Number"
                type="text"
                name="passportNumber"
                margin="normal"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Field
                label="Expiry"
                type="text"
                name="expiry"
                margin="normal"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                Contact Details
              </Typography>
            </Grid>
            <Grid xs={12}>
              <Field
                type="text"
                name="contact"
                label="Who to contact"
                margin="normal"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
            <Grid xs={12}>
              <Field
                type="text"
                name="address"
                label="Address"
                margin="normal"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
            <Grid xs={12}>
              <Field
                type="text"
                name="phone"
                label="Phone No."
                margin="normal"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
            <Grid xs={12}>
              <Field
                type="text"
                name="email"
                label="Email"
                margin="normal"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
            <Grid xs={12}>
              <Field
                type="text"
                name="confirmEmail"
                label="Confirm Email"
                margin="normal"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  </div>
);

export default TravellerForm;
