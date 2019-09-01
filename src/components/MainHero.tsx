import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import HeroLayout from "./HeroLayout";
import QuickForm from "./QuickForm";

const backgroundImage =
  "../../static/images/punakha-dzong-fortress-monastery-mountain-landscape-punakha.jpg";

const useStyles = makeStyles(theme => ({
  formContainer: {
    marginTop: theme.spacing(3)
  },
  heightFiller: {
    marginTop: 120,
    [theme.breakpoints.up("sm")]: {
      marginTop: 240
    }
  },
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: "#7fc7d9",
    backgroundPosition: "center"
  },
  button: {
    minWidth: 200
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(10)
    }
  },
  more: {
    marginTop: theme.spacing(2)
  }
}));

function MainHero(props: any) {
  const classes = useStyles(props);

  return (
    <HeroLayout backgroundClassName={classes.background}>
      <div className={classes.heightFiller} />
      <Grid>
        <Typography color="inherit" align="left" variant="h1" gutterBottom>
          Start Your Journey
        </Typography>
        <Typography color="inherit" variant="h5" gutterBottom>
          Come and experience our unique hospitality.
        </Typography>
      </Grid>

      <Grid className={classes.formContainer}>
        <QuickForm />
      </Grid>
    </HeroLayout>
  );
}
export default MainHero;
