import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
  bigContainer: {
    width: "100%"
  },
  outlinedButtom: {
    textTransform: "uppercase",
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  },
  topInfo: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 42
  }
}));

export default function TourInformation(props: any) {
  const classes = useStyles(props);
  return (
    <div className={classes.bigContainer}>
      <Paper className={classes.paper}>
        <div className={classes.topInfo}>
          <div>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              Information
            </Typography>
            <Typography variant="body1" gutterBottom>
              General information about the service
            </Typography>
          </div>
          <div>
            <Button
              variant="outlined"
              size="large"
              className={classes.outlinedButtom}
            >
              Edit
            </Button>
          </div>
        </div>
        <Grid item container xs={12}>
          <Grid item xs={6}>
            <Typography
              style={{ textTransform: "uppercase" }}
              color="secondary"
              gutterBottom
            >
              User
            </Typography>
            <Typography variant="h5" gutterBottom>
              John Doe
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography
              style={{ textTransform: "uppercase" }}
              color="secondary"
              gutterBottom
            >
              City
            </Typography>
            <Typography variant="h5" gutterBottom>
              Tokyo
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
