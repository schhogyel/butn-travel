import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import { Theme, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TourInformation from './TourInformation';
import TravellersInformation from './TravellersInformation';
import ContactDetails from './ContactDetails';
import Confirmation from './Confirmation';

import { TravellerProvider } from './TravellerContext';
import { Formik } from 'formik';

const numeral = require('numeral');
numeral.defaultFormat('0,000');

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden',
    backgroundSize: 'cover',
    backgroundPosition: '0 400px',
    marginTop: 10,
    padding: 10,
    paddingTop: 60,
    paddingBottom: theme.spacing(2),
    backgroundColor: theme.color.neutral[50],

    [theme.breakpoints.up('md')]: {
      padding: 20,
      paddingTop: 60,
      paddingBottom: 200
    }
  },
  grid: {
    margin: `0 ${theme.spacing(2)}px`
  },
  bigContainer: {
    width: '100%'
  },
  stepContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  stepGrid: {
    width: '80%'
  },
  backButton: {
    marginRight: theme.spacing(1)
  },

  stepper: {
    backgroundColor: 'transparent',
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(2, 0)
    }
  },
  flexBar: {
    marginTop: 32,
    display: 'flex',
    justifyContent: 'center'
  },
  cardGrid: {
    padding: 0,
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(1),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(3, 2)
    }
  }
}));

const getSteps = () => {
  return [
    'Tour Information',
    'Travellers Information',
    'Contact Details',
    'Payment'
  ];
};

function Wizard() {
  const [activeStep, setActiveStep] = React.useState(0);

  const formRef = React.useRef<Formik>();

  const handleNext = () => {
    if (activeStep !== 1 && activeStep !== 2) {
      setActiveStep(activeStep => activeStep + 1);
    } else {
      formRef.current && formRef.current.submitForm();
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep => activeStep - 1);
  };

  function stepActions() {
    if (activeStep === 3) {
      return 'Payment';
    }
    return 'Continue';
  }
  const classes = useStyles();
  const steps = getSteps();

  return (
    <React.Fragment>
      <TravellerProvider>
        <CssBaseline />
        <div className={classes.root}>
          <Container className={classes.cardGrid} maxWidth="lg">
            <Grid container justify="center">
              <Grid
                alignItems="center"
                justify="center"
                container
                className={classes.grid}
              >
                <Grid item xs={12}>
                  <div className={classes.stepContainer}>
                    <div className={classes.bigContainer}>
                      <Stepper
                        classes={{ root: classes.stepper }}
                        activeStep={activeStep}
                        alternativeLabel
                      >
                        {steps.map(label => {
                          return (
                            <Step key={label}>
                              <StepLabel>{label}</StepLabel>
                            </Step>
                          );
                        })}
                      </Stepper>
                    </div>
                    {activeStep === 0 && <TourInformation />}
                    {activeStep === 1 && (
                      <TravellersInformation
                        formikSubmit={formRef}
                        setActiveStep={setActiveStep}
                      />
                    )}
                    {activeStep === 2 && (
                      <ContactDetails
                        formikSubmit={formRef}
                        setActiveStep={setActiveStep}
                      />
                    )}
                    {activeStep === 3 && <Confirmation />}
                    <div className={classes.flexBar}>
                      {activeStep !== 3 && (
                        <Button
                          disabled={activeStep === 0}
                          onClick={handleBack}
                          className={classes.backButton}
                          size="large"
                        >
                          Back
                        </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                        size="large"
                      >
                        {stepActions()}
                      </Button>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </TravellerProvider>
    </React.Fragment>
  );
}

export default Wizard;
