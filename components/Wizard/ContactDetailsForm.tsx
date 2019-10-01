import React from 'react';
import { Formik, Form, Field } from 'formik';
import TextField from '../TextField';
// import Button from '../Button';
import { Grid, Typography } from '@material-ui/core';
import * as Yup from 'yup';
// import { makeStyles } from '@material-ui/styles';

// const useStyles = makeStyles((theme: Theme) => ({
//   switchContainer: {
//     padding: theme.spacing(1)
//   }
// }));

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid emails address')
    .required('Email is required')
});

const ContactDetailsForm: React.SFC = () => {
  // const classes = useStyles();
  return (
    <div>
      <Formik
        initialValues={{
          contactPerson: '',
          address: '',
          phone: '',
          email: '',
          confirmEmail: ''
        }}
        validationSchema={FormSchema}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
          setSubmitting(false);
        }}
      >
        {() => (
          <Form>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                  Contact Details
                </Typography>
              </Grid>
              <Grid item xs={8}>
                <Field
                  type="text"
                  name="contactPerson"
                  label="Who to contact"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  component={TextField}
                />
                <Field
                  type="text"
                  name="address"
                  label="Address"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  component={TextField}
                />
                <Field
                  type="text"
                  name="phone"
                  label="Phone No."
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  component={TextField}
                />
                <Field
                  type="text"
                  name="email"
                  label="Email"
                  margin="normal"
                  variant="outlined"
                  fullWidth
                  component={TextField}
                />
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
};

export default ContactDetailsForm;
