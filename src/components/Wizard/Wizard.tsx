import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import { Theme, Container } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TourInformation from "./TourInformation";
import BankInformation from "./BankInformation";
import DetailsInformation from "./DetailsInformation";
import TermsAndConditions from "./TermsAndConditions";
import Confirmation from "./Confirmation";
import Complete from "./Complete";

const numeral = require("numeral");
numeral.defaultFormat("0,000");

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
    backgroundSize: "cover",
    backgroundPosition: "0 400px",
    marginTop: 10,
    padding: 20,
    paddingTop: 60,
    paddingBottom: 200
  },
  grid: {
    margin: `0 ${theme.spacing(2)}px`
  },
  bigContainer: {
    width: "100%"
  },
  stepContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  stepGrid: {
    width: "80%"
  },
  backButton: {
    marginRight: theme.spacing(1)
  },

  stepper: {
    backgroundColor: "transparent"
  },
  flexBar: {
    marginTop: 32,
    display: "flex",
    justifyContent: "center"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  }
}));

const getSteps = () => {
  return [
    "Tour Information",
    "Review Tour",
    "Travellers Information",
    "Payment"
  ];
};

function Wizard() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep => activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep => activeStep - 1);
  };

  function stepActions() {
    if (activeStep === 3) {
      return "Accept";
    }
    if (activeStep === 4) {
      return "Send";
    }
    if (activeStep === 5) {
      return "Done";
    }
    return "Next";
  }
  const classes = useStyles();
  const steps = getSteps();

  return (
    <React.Fragment>
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
                  {activeStep === 1 && <BankInformation />}
                  {activeStep === 2 && <DetailsInformation />}
                  {activeStep === 3 && <TermsAndConditions />}
                  {activeStep === 4 && <Confirmation />}
                  {(activeStep === 5 || activeStep === 6) && <Complete />}
                  <div className={classes.flexBar}>
                    {activeStep !== 5 && (
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
                      // disabled={!termsChecked}
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
    </React.Fragment>
  );
}

export default Wizard;
