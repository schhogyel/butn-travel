import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "./Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import TourPackage from "./TourPackage";
import { tourPackages } from "../constants";
import Button from "./Button";

const useStyles = makeStyles(theme => ({
  root: {
    // background: "#f5f5f5"
    background: "#efeee5"
  },
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  title: {
    paddingBottom: theme.spacing(3)
  },
  moreButton: {
    display: "flex",
    marginTop: theme.spacing(4)
  }
}));

export default function TourList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.cardGrid} maxWidth="lg">
        <Grid>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            className={classes.title}
            marked="center"
          >
            Our Top Tours
          </Typography>
        </Grid>
        <Grid container spacing={4}>
          {tourPackages
            .map(card => <TourPackage key={card.id} card={card} />)
            .slice(0, 3)}
        </Grid>
        <Grid className={classes.moreButton}>
          <Button variant="contained" color="secondary">
            More Tours
          </Button>
        </Grid>
      </Container>
    </div>
  );
}
