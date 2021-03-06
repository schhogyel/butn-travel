import React from 'react';
import {
  Formik,
  Form,
  Field,
  FieldArray,
  FieldProps,
  FormikProps
} from 'formik';
import TextField from '../TextField/TextField';
import JourneyContext from '../../pages/JourneyContext';
import TravellerContext from './TravellerContext';
import CountryField from '../TextField/CountryField';

// import Button from '../Button';
import {
  Grid,
  Typography,
  FormControlLabel,
  Switch,
  Theme,
  Divider,
  InputLabel
} from '@material-ui/core';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/styles';
import DatePickerField from '../DatePicker/DatePickerField';
import CustomSelect from '../TextField/CustomSelect';

const useStyles = makeStyles((theme: Theme) => ({
  inputRoot: {},
  inputStyle: {
    padding: theme.spacing(1),
    backgroundColor: theme.palette.grey[300]
  },
  customInputStyle: {
    fontSize: 16,
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[300],
    borderRadius: theme.shape.borderRadius
  },
  switchContainer: {
    padding: theme.spacing(1)
  },
  label: {
    fontSize: 16,
    paddingBottom: theme.spacing(1)
  },
  datePicker: {
    backgroundColor: theme.palette.grey[300]
  }
}));

const FormSchema = Yup.object().shape({
  travellers: Yup.array().of(
    Yup.object().shape({
      title: Yup.string(),
      fullName: Yup.string().required('Name is required'),
      dateOfBirth: Yup.string(),
      hasPassport: Yup.boolean(),
      country: Yup.string(),
      passportNumber: Yup.string(),
      expiry: Yup.string()
    })
  )
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

type FormikField<Value> = {
  onChange: (e: React.ChangeEvent) => void;
  onBlur: (e: React.ChangeEvent) => void;
  value: Value | string;
  name: string;
};

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

const TravellerForm = (props: any) => {
  const classes = useStyles();
  const { submit } = props;

  const {
    journey: { noOfTravellers }
  } = React.useContext(JourneyContext);

  const { setTravellers } = React.useContext(TravellerContext);

  const titleOptions = [
    { label: 'Mr', value: 'Mr' },
    { label: 'Mrs', value: 'Mrs' },
    { label: 'Miss', value: 'Miss' }
  ];

  type Item = {};

  function onSelection(
    field: FormikField<Item>,
    form: FormikProps<Item>,
    item: Item
  ) {
    form.setFieldValue(field.name, item);
  }

  return (
    <div>
      <Formik
        initialValues={{
          travellers: getInitialTraveller(noOfTravellers)
        }}
        validationSchema={FormSchema}
        onSubmit={(values, { setSubmitting }) => {
          setTravellers(values.travellers);
          setSubmitting(false);
          props.setActiveStep((activeStep: number) => activeStep + 1);
        }}
        ref={submit}
      >
        {({ values, handleChange }) => {
          return (
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
                                <Grid container spacing={2}>
                                  <Grid item xs={4}>
                                    <InputLabel className={classes.label}>
                                      Title
                                    </InputLabel>
                                    <Field
                                      type="text"
                                      name={`travellers.${index}.title`}
                                      fullWidth
                                      component={(props: any) => (
                                        <CustomSelect
                                          options={titleOptions}
                                          inputStyle={classes.inputStyle}
                                          {...props}
                                        />
                                      )}
                                    />
                                  </Grid>
                                  <Grid xs={8} item>
                                    <InputLabel className={classes.label}>
                                      Date of Birth
                                    </InputLabel>
                                    <Field
                                      type="text"
                                      name={`travellers.${index}.dateOfBirth`}
                                      fullWidth
                                      component={(props: any) => (
                                        <DatePickerField
                                          format={'dd/MM/yyyy'}
                                          // TextFieldComponent={TextField}
                                          datePickerStyles={classes.datePicker}
                                          {...props}
                                        />
                                      )}
                                    />
                                  </Grid>
                                  <Grid xs={12} item>
                                    <InputLabel className={classes.label}>
                                      Name
                                    </InputLabel>
                                    <Field
                                      type="text"
                                      name={`travellers.${index}.fullName`}
                                      fullWidth
                                      component={TextField}
                                    />
                                  </Grid>
                                </Grid>
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
                                    <Grid container spacing={2}>
                                      {/* <Grid item xs={12}>
                                        <InputLabel className={classes.label}>
                                          Country
                                        </InputLabel>
                                        <Field
                                          type="text"
                                          name={`travellers.${index}.country`}
                                          fullWidth
                                          component={TextField}
                                        />
                                      </Grid> */}
                                      <Grid item xs={12}>
                                        <InputLabel className={classes.label}>
                                          Country
                                        </InputLabel>
                                        <Field
                                          type="text"
                                          name={`travellers.${index}.country`}
                                          fullWidth
                                        >
                                          {({
                                            field,
                                            form
                                          }: FieldProps<Item>) => (
                                            <CountryField
                                              downshiftProps={{
                                                selectedItem: field.value,
                                                onChange: (
                                                  selectedItem: Item
                                                ) =>
                                                  onSelection(
                                                    field,
                                                    form,
                                                    selectedItem
                                                  )
                                              }}
                                              field={field}
                                              form={form}
                                              textFieldProps={{
                                                InputProps: {
                                                  disableUnderline: true,
                                                  classes: {
                                                    root: classes.inputRoot,
                                                    input:
                                                      classes.customInputStyle
                                                  }
                                                }
                                              }}
                                            />
                                          )}
                                        </Field>
                                      </Grid>
                                      <Grid item xs={12} md={6}>
                                        <InputLabel className={classes.label}>
                                          Passport Number
                                        </InputLabel>
                                        <Field
                                          type="text"
                                          name={`travellers.${index}.passportNumber`}
                                          fullWidth
                                          component={TextField}
                                        />
                                      </Grid>
                                      <Grid item xs={12} md={6}>
                                        <InputLabel className={classes.label}>
                                          Expiry
                                        </InputLabel>
                                        <Field
                                          type="text"
                                          name={`travellers.${index}.expiry`}
                                          fullWidth
                                          component={(props: any) => (
                                            <DatePickerField
                                              format={'dd/MM/yyyy'}
                                              datePickerStyles={
                                                classes.datePicker
                                              }
                                              {...props}
                                            />
                                          )}
                                        />
                                      </Grid>
                                    </Grid>
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
          );
        }}
      </Formik>
    </div>
  );
};

export default TravellerForm;
