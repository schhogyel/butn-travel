import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Container } from "@material-ui/core";
import Toolbar from "./Toolbar";
import Link from "./Link";
import { Typography } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";

interface Props {
  children: React.ReactElement;
  trigger: boolean;
  window?: () => Window;
}

function HideOnScroll(props: Props) {
  const { children, trigger } = props;

  console.log(trigger);

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

const useStyles = makeStyles(theme => ({
  primaryBg: {
    background: theme.palette.primary.main
  },
  transparentBg: {
    background: "transparent"
  },
  menu: {
    [theme.breakpoints.down("sm")]: {
      display: "none"
    }
  },
  toolbar: {
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      paddingRight: 0
    }
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
  link: {
    margin: theme.spacing(1, 1.5),
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
  }
}));

export default function NavBar(props: any) {
  const trigger = useScrollTrigger();
  const classes = useStyles(props);

  return (
    <React.Fragment>
      <HideOnScroll trigger={trigger}>
        <AppBar
          position="fixed"
          className={props.trigger ? classes.transparentBg : classes.primaryBg}
        >
          <Container>
            <Toolbar className={classes.toolbar}>
              <Link href="/">
                <Typography
                  color="inherit"
                  className={classes.siteName}
                  variant="h4"
                >
                  Bhutan Wild Expedition
                </Typography>
              </Link>
              <div className={classes.left} />

              <div className={classes.right} />
              <nav className={classes.menu}>
                <Link
                  variant="button"
                  color="textSecondary"
                  href="#"
                  className={classes.link}
                >
                  Packages
                </Link>
                <Link
                  variant="button"
                  color="textPrimary"
                  href="#"
                  className={classes.link}
                >
                  Hotels
                </Link>
                <Link
                  variant="button"
                  color="textPrimary"
                  href="/visas"
                  className={classes.link}
                >
                  Visa
                </Link>
                <Link
                  variant="button"
                  color="textPrimary"
                  href="#"
                  className={classes.link}
                >
                  Enquiry
                </Link>
              </nav>
            </Toolbar>
          </Container>
        </AppBar>
      </HideOnScroll>
    </React.Fragment>
  );
}
