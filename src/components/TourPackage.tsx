import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardHeader from "@material-ui/core/CardHeader";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
// import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
// import FavoriteIcon from "@material-ui/icons/Favorite";
// import ShareIcon from "@material-ui/icons/Share";
import Button from "@material-ui/core/Button";
import Link from "next/link";

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: "70%" // 16:9
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
  }
}));

export default function TourPackage({ card, card: { img, description } }: any) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card elevation={0} square={true}>
        <CardMedia
          className={classes.media}
          image={`${img}`}
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          {/* <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton> */}
          <div className={classes.right} />

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
          <Link href={"#booking-form"}>
            <a className={classes.link}>
              <Button size="small" color="primary">
                Book
              </Button>
            </a>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
}
