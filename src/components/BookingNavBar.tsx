import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Container, Grid, Divider } from "@material-ui/core";
import Toolbar from "./Toolbar";
import Link from "./Link";
import { Typography } from "@material-ui/core";
import { FlightLand, FlightTakeoff, People } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  primaryBg: {
    background: theme.palette.primary.main,
    transition: "background 0.3s ease-in-out"
  },
  transparentBg: {
    background: "transparent",
    transition: "background 0.3s ease-in-out"
  },
  borderBottom: {
    borderBottom: "1px solid rgba(255,255,255,0.3)"
  },
  menu: {
    flex: 1,
    minWidth: 800
  },
  toolbar: {
    display: "flex"
  },
  siteName: {
    fontWeight: "bold",
    color: "#fff",
    [theme.breakpoints.down("sm")]: {
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
    display: "flex",
    justifyContent: "flex-end"
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
    color: "#fff"
  },
  logoContainer: {
    position: "relative",
    width: 120
  },
  logo: {
    width: "100%",
    position: "absolute",
    top: "-30px"
  },
  itemContainer: {
    display: "flex",
    justifyContent: "center"
  },
  textContainer: {
    marginLeft: theme.spacing(1)
  },
  divider: {
    backgroundColor: "rgba(255, 255, 255, 0.5)"
  }
}));

export default function BookingNavBar(props: any) {
  const classes = useStyles(props);

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
              <Grid container spacing={1} style={{ height: "70px" }}>
                <Divider
                  orientation="vertical"
                  light
                  className={classes.divider}
                />
                <Grid item xs={3} className={classes.itemContainer}>
                  <FlightLand />
                  <div className={classes.textContainer}>
                    <Typography className={classes.bookingItem} variant="h6">
                      Arrival
                    </Typography>
                    <Typography className={classes.bookingItem} variant="body2">
                      26th Jan
                    </Typography>
                  </div>
                </Grid>
                <Divider
                  orientation="vertical"
                  light
                  className={classes.divider}
                />
                <Grid item xs={3} className={classes.itemContainer}>
                  <FlightTakeoff />
                  <div className={classes.textContainer}>
                    <Typography className={classes.bookingItem} variant="h6">
                      Departure
                    </Typography>
                    <Typography className={classes.bookingItem} variant="body2">
                      26th Feb
                    </Typography>
                  </div>
                </Grid>
                <Divider
                  orientation="vertical"
                  light
                  className={classes.divider}
                />
                <Grid item xs={3} className={classes.itemContainer}>
                  <People />
                  <div className={classes.textContainer}>
                    <Typography className={classes.bookingItem} variant="h6">
                      Guests
                    </Typography>
                    <Typography className={classes.bookingItem} variant="body2">
                      6
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
