import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Container } from "@material-ui/core";
import Toolbar from "./Toolbar";
import Link from "./Link";
import { Typography } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { useScrollPosition } from "./useScrollPosition";
import clsx from "clsx";

interface Props {
  children: React.ReactElement;
  trigger: boolean;
  window?: () => Window;
}

function HideOnScroll(props: Props) {
  const { children, trigger } = props;

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

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

  const [transparentOnScroll, settransparentOnScroll] = useState(true);

  useScrollPosition(
    ({ currPos }: any) => {
      if (currPos.y > 120) {
        settransparentOnScroll(false);
      } else {
        settransparentOnScroll(true);
      }
    },
    [transparentOnScroll],
    200
  );

  return (
    <React.Fragment>
      <HideOnScroll trigger={trigger}>
        <AppBar
          position="fixed"
          className={
            transparentOnScroll ? classes.transparentBg : classes.primaryBg
          }
          elevation={transparentOnScroll ? 0 : 1}
        >
          <Container>
            <Toolbar
              className={
                transparentOnScroll
                  ? clsx(classes.toolbar, classes.borderBottom)
                  : classes.toolbar
              }
            >
              <Link href="/" underline="none">
                <Typography
                  color="inherit"
                  className={classes.siteName}
                  variant="h4"
                >
                  Himalayan Bhutan
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
