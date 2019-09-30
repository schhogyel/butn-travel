import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Container, Grid, Divider } from '@material-ui/core';
import Toolbar from './Toolbar';
import Link from './Link';
import { Typography } from '@material-ui/core';
import {
  PeopleTwoTone,
  FlightTakeoffTwoTone,
  FlightLandTwoTone
} from '@material-ui/icons';
import { format } from 'date-fns';

import JourneyContext from '../pages/JourneyContext';

const useStyles = makeStyles(theme => ({
  primaryBg: {
    background: theme.palette.primary.main,
    transition: 'background 0.3s ease-in-out'
  },
  transparentBg: {
    background: 'transparent',
    transition: 'background 0.3s ease-in-out'
  },
  borderBottom: {
    borderBottom: '1px solid rgba(255,255,255,0.3)'
  },
  menu: {
    flex: 1,
    minWidth: 800
  },
  toolbar: {
    display: 'flex'
  },
  siteName: {
    fontWeight: 'bold',
    color: '#fff',
    [theme.breakpoints.down('sm')]: {
      fontSize: 18
    }
  },
  title: {
    fontSize: 24
  },
  left: {
    flex: 1
  },
  leftLinkActive: {
    color: theme.palette.common.white
  },
  right: {
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end'
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3)
  },
  linkSecondary: {
    color: theme.palette.secondary.main
  },
  bookingItem: {
    color: '#fff'
  },
  journeyLabel: {
    color: theme.palette.common.white
  },
  journeyValue: {},
  logoContainer: {
    position: 'relative',
    width: 120
  },
  logo: {
    width: '100%',
    position: 'absolute',
    top: '-30px'
  },
  itemContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  textContainer: {
    marginLeft: theme.spacing(1)
  },
  divider: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)'
  },
  gridContainer: {
    alignItems: 'center',
    height: '70px'
  }
}));

export default function BookingNavBar(props: any) {
  const classes = useStyles(props);
  const { journey, setJourney } = useContext(JourneyContext);
  console.log({ journey, setJourney });

  return (
    <React.Fragment>
      <AppBar position="fixed">
        <Container>
          <Toolbar className={classes.toolbar}>
            <Link href="/">
              <Typography
                color="inherit"
                className={classes.siteName}
                variant="h4"
              >
                Himalayan Bhutan
              </Typography>
            </Link>
            <div className={classes.right} />
            <nav className={classes.menu}>
              <Grid container spacing={1} className={classes.gridContainer}>
                <Divider
                  orientation="vertical"
                  light
                  className={classes.divider}
                />
                <Grid item xs={3} className={classes.itemContainer}>
                  <FlightLandTwoTone />
                  <div className={classes.textContainer}>
                    <Typography className={classes.journeyLabel} variant="h6">
                      Arrival
                    </Typography>
                    <Typography
                      className={classes.journeyValue}
                      variant="subtitle1"
                    >
                      {format(journey.arrivalDate, 'do MMM')}
                    </Typography>
                  </div>
                </Grid>
                <Divider
                  orientation="vertical"
                  light
                  className={classes.divider}
                />
                <Grid item xs={3} className={classes.itemContainer}>
                  <FlightTakeoffTwoTone />
                  <div className={classes.textContainer}>
                    <Typography className={classes.journeyLabel} variant="h6">
                      Departure
                    </Typography>
                    <Typography
                      className={classes.journeyValue}
                      variant="subtitle1"
                    >
                      {format(journey.departureDate, 'do MMM')}
                    </Typography>
                  </div>
                </Grid>
                <Divider
                  orientation="vertical"
                  light
                  className={classes.divider}
                />
                <Grid item xs={3} className={classes.itemContainer}>
                  <PeopleTwoTone />
                  <div className={classes.textContainer}>
                    <Typography className={classes.journeyLabel} variant="h6">
                      Guests
                    </Typography>
                    <Typography
                      className={classes.journeyValue}
                      variant="subtitle1"
                      align="center"
                    >
                      {journey.noOfTravellers}
                    </Typography>
                  </div>
                </Grid>
                <Divider
                  orientation="vertical"
                  light
                  className={classes.divider}
                />
                <Grid item xs={2}>
                  <Typography
                    className={classes.bookingItem}
                    variant="h6"
                    align="center"
                  >
                    Edit
                  </Typography>
                </Grid>
              </Grid>
            </nav>
          </Toolbar>
        </Container>
      </AppBar>
    </React.Fragment>
  );
}
