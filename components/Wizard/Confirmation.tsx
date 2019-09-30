import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const numeral = require("numeral");
numeral.defaultFormat("0,000");

const useStyles = makeStyles((theme: Theme) => ({
  smallContainer: {
    width: "60%"
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: "left",
    color: theme.palette.text.secondary
  }
}));

export default function Confirmation() {
  const classes = useStyles();
  return (
    <div className={classes.smallContainer}>
      <Paper className={classes.paper}>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              Sign & confirm
            </Typography>
            <Typography variant="body1" gutterBottom>
              Sign and confirm your agreement
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
