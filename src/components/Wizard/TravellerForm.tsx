import React from 'react';
import { Formik, Form, Field } from 'formik';
import TextField from '../TextField';
// import Button from '../Button';
import { Grid } from '@material-ui/core';

type Errors = {
  email?: String;
};

const TravellerForm = () => (
  <div>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        let errors: Errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {() => (
        <Form>
          <Grid container>
            <Grid item xs={12}>
              <Field
                label="Email"
                type="email"
                name="email"
                margin="normal"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
            <Grid xs={12}>
              <Field
                type="password"
                name="password"
                label="Password"
                margin="normal"
                variant="outlined"
                fullWidth
                component={TextField}
              />
            </Grid>
            {/* <Button
              type="submit"
              disabled={isSubmitting}
              variant="contained"
              color="secondary"
            >
              Submit
            </Button> */}
          </Grid>
        </Form>
      )}
    </Formik>
  </div>
);

export default TravellerForm;
