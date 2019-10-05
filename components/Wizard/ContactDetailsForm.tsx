import React from 'react';
import { Formik, Form, Field } from 'formik';
import TextField from '../TextField/TextField';
// import Button from '../Button';
import { Grid, Typography, InputLabel, Theme } from '@material-ui/core';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
  label: {
    fontSize: 16,
    paddingBottom: theme.spacing(1)
  }
}));

const FormSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid emails address')
    .required('Email is required')
});

const ContactDetailsForm: React.SFC = () => {
  const classes = useStyles();
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
              <Grid item xs={12} md={4}>
                <Typography variant="subtitle1" style={{ fontWeight: 'bold' }}>
                  Contact Details
                </Typography>
              </Grid>
              <Grid item xs={12} md={8}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <InputLabel className={classes.label}>
                      Who to contact
                    </InputLabel>
                    <Field
                      type="text"
                      name="contactPerson"
                      fullWidth
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel className={classes.label}>Address</InputLabel>
                    <Field
                      type="text"
                      name="address"
                      fullWidth
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel className={classes.label}>Phone</InputLabel>
                    <Field
                      type="text"
                      name="phone"
                      fullWidth
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel className={classes.label}>Email</InputLabel>
                    <Field
                      type="text"
                      name="email"
                      fullWidth
                      component={TextField}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <InputLabel className={classes.label}>
                      Confirm email
                    </InputLabel>
                    <Field
                      type="text"
                      name="confirmEmail"
                      fullWidth
                      component={TextField}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactDetailsForm;
