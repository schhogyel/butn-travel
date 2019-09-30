import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
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

export default function Complete() {
  const classes = useStyles();
  return (
    <div className={classes.smallContainer}>
      <Paper className={classes.paper}>
        <Grid item container xs={12}>
          <Grid item xs={12}>
            <Typography variant="subtitle1" gutterBottom>
              Congratulations{" "}
              <span role="img" aria-label="conrats emoji">
                🎉
              </span>
            </Typography>
            <Typography variant="body1" gutterBottom>
              We have now a positive response
            </Typography>
            <Button fullWidth variant="outlined">
              Download the service invoice or whatever
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
