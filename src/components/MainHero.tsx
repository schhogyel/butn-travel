import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import HeroLayout from "./HeroLayout";
import QuickForm from "./QuickForm";

const backgroundImage = "../../static/background.jpg";

const useStyles = makeStyles(theme => ({
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
      <img style={{ display: "none" }} src={backgroundImage} alt="" />
      <div className={classes.heightFiller} />
      <Typography color="inherit" align="left" variant="h1" gutterBottom>
        Start Your Journey
      </Typography>
      <Typography color="inherit" variant="h5" gutterBottom>
        Come and experience our unique hospitality.
      </Typography>
      <QuickForm />
    </HeroLayout>
  );
}
export default MainHero;
