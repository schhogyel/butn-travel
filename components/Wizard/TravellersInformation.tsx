import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import { Theme, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import TravellerForm from './TravellerForm';

const numeral = require('numeral');
numeral.defaultFormat('0,000');

const useStyles = makeStyles((theme: Theme) => ({
  smallContainer: {
    width: '60%'
  },
  bigContainer: {
    width: '100%'
  },
  outlinedButtom: {
    textTransform: 'uppercase',
    margin: theme.spacing(1)
  },
  paper: {
    padding: theme.spacing(3),
    textAlign: 'left',
    color: theme.palette.text.secondary
  },
  topInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 42
  },
  formControl: {
    width: '100%'
  }
}));

export default function TravellersInformation() {
  const classes = useStyles();
  return (
    <div className={classes.bigContainer}>
      <Paper className={classes.paper}>
        <div className={classes.topInfo}>
          <div>
            <Typography
              variant="subtitle1"
              style={{ fontWeight: 'bold' }}
              gutterBottom
            >
              Details
            </Typography>
            <Typography variant="body1" gutterBottom>
              We need some details about any information
            </Typography>
          </div>
        </div>
        <Grid item container style={{ marginBottom: 32 }} spacing={1}>
          <Grid item xs={6}>
            <TravellerForm />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
