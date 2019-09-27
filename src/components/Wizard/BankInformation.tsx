import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
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
  },
  formControl: {
    width: "100%"
  }
}));

export default function BankInformation() {
  const classes = useStyles();
  function handleChange() {
    console.log();
  }
  return (
    <div className={classes.smallContainer}>
      <Paper className={classes.paper}>
        <div>
          <div style={{ marginBottom: 32 }}>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              Bank information
            </Typography>
            <Typography variant="body1" gutterBottom>
              Select account to receive the money
            </Typography>
          </div>
          <div style={{ marginBottom: 32 }}>
            <Typography
              style={{ textTransform: "uppercase" }}
              color="secondary"
              gutterBottom
            >
              Bank
            </Typography>
            <Typography variant="h5" gutterBottom>
              N26
            </Typography>
          </div>
          <div>
            <Typography
              style={{
                textTransform: "uppercase",
                marginBottom: 20
              }}
              color="secondary"
              gutterBottom
            >
              Receiving account
            </Typography>
            <FormControl variant="outlined" className={classes.formControl}>
              <Select onChange={handleChange}>
                <MenuItem value="">
                  <em></em>
                </MenuItem>
                <MenuItem value={"0297 00988200918"}>First account</MenuItem>
                <MenuItem value={"0235 00235233332"}>Second account</MenuItem>
                <MenuItem value={"1256 00864222212"}>Third account</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
      </Paper>
    </div>
  );
}
