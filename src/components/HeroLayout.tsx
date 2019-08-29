import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.common.white,
    position: "relative",
    display: "flex",
    // alignItems: "center",
    [theme.breakpoints.up("sm")]: {
      height: "90vh",
      minHeight: 500,
      maxHeight: 1300
    }
  },
  container: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(14),
    display: "flex",
    flexDirection: "column"
    // alignItems: "center"
  },
  backdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.25,
    zIndex: -1
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    zIndex: -2
  },
  arrowDown: {
    position: "absolute",
    bottom: theme.spacing(4)
  }
}));

export default function HeroLayout(props: any) {
  const classes = useStyles();
  const { backgroundClassName, children } = props;

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        {children}
        <div className={classes.backdrop} />
        <div className={clsx(classes.background, backgroundClassName)} />
      </Container>
    </section>
  );
}
