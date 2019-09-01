import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Chip from "@material-ui/core/Chip";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
import Button from "./Button";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  card: {
    position: "relative"
    // transition: "0.3s cubic-bezier(.47,1.64,.41,.8)",

    // "&:hover": {
    //   transform: "scale(1.04)",
    //   boxShadow: "0 4px 20px 0 rgba(0,0,0,255,.5)"
    // }
  },
  media: {
    height: 0,
    paddingTop: "70%" // 16:9,
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: "rotate(180deg)"
  },
  avatar: {
    backgroundColor: red[500]
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  right: {
    flex: 1,
    display: "flex",
    justifyContent: "flex-end"
  },
  link: {
    textDecoration: "none"
  },
  tourName: {
    fontWeight: 500
  },
  chip: {
    margin: theme.spacing(1),
    position: "absolute",
    top: 0,
    right: 0,
    borderTopLeftRadius: theme.spacing(0),
    borderBottomLeftRadius: theme.spacing(0),
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    marginRight: 0
  }
}));

export default function TourPackage({ card, card: { img, name } }: any) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4} className={classes.root}>
      <Card elevation={0} square={true} className={classes.card}>
        <CardMedia
          className={classes.media}
          image={`${img}`}
          title="Paella dish"
        />
        <Chip label="Most popular" className={classes.chip} color="secondary" />
        <CardContent>
          <Typography
            variant="h5"
            color="textPrimary"
            component="p"
            className={classes.tourName}
          >
            {name}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}

          <Link
            href={{
              pathname: "/tour",
              query: { card: JSON.stringify(card) }
            }}
            as="/tour/package"
          >
            <a className={classes.link}>
              <Button size="small" color="primary">
                View
              </Button>
            </a>
          </Link>
          <div className={classes.right} />

          <Link href={"#booking-form"}>
            <a className={classes.link}>
              <Button size="small" color="primary" variant="outlined">
                Book
              </Button>
            </a>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
