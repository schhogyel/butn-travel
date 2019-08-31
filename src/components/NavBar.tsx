import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Container } from "@material-ui/core";
import Toolbar from "./Toolbar";
import Link from "./Link";
import { Typography } from "@material-ui/core";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Slide from "@material-ui/core/Slide";
import { useScrollPosition } from "./useScrollPosition";

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
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)"
  },
  transparentBg: {
    background: "transparent",
    transition: "0.3s cubic-bezier(.47,1.64,.41,.8)"
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

  const [hideOnScroll, setHideOnScroll] = useState(true);

  useScrollPosition(
    ({ prevPos, currPos }: any) => {
      if (currPos.y > 100) {
        setHideOnScroll(true);
      } else {
        setHideOnScroll(false);
      }
      console.log("curr", currPos.y);
      console.log(prevPos.y);
      console.log(hideOnScroll);
    },
    [hideOnScroll],
    200
  );

  return (
    <React.Fragment>
      <HideOnScroll trigger={trigger}>
        <AppBar
          position="fixed"
          className={!hideOnScroll ? classes.transparentBg : classes.primaryBg}
          elevation={!hideOnScroll ? 0 : 1}
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
