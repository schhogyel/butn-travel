import React from "react";
import { makeStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "../components/Typography";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    display: "flex",
    position: "relative"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(0, 5)
  },
  image: {
    height: 110
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
}));

export default function ValueService(props: any) {
  const classes = useStyles(props);

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid container spacing={2}>
          <Grid item xs={12} md={3}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/passport.svg"
                alt="suitcase"
              />
              <Typography variant="h6" className={classes.title}>
                Guaranteed visa
              </Typography>
              <Typography variant="body1">
                We have satisfied each and every one of our travellers' visa
                issuance needs.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/bill.svg"
                alt="graph"
              />
              <Typography variant="h6" className={classes.title}>
                No hidden costs
              </Typography>
              <Typography variant="body1">
                You won't need to make any additional payments during your trip.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/help.svg"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Exclusive rates
              </Typography>
              <Typography variant="body1">
                Our rates are competitive and provide great value. All services
                and hotels are paid for.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={3}>
            <div className={classes.item}>
              <img
                className={classes.image}
                src="/static/travel-guide.svg"
                alt="clock"
              />
              <Typography variant="h6" className={classes.title}>
                Guided tours
              </Typography>
              <Typography variant="body1">
                We provide experienced local guides that will make your
                experience richer.
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
