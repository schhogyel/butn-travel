import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Button from './Button';
import Link from 'next/link';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(2)
  },
  card: {
    position: 'relative'
  },
  media: {
    height: 0,
    paddingTop: '70%' // 16:9,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest
    })
  },
  expandOpen: {
    transform: 'rotate(180deg)'
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
    display: 'flex',
    justifyContent: 'flex-end'
  },
  link: {
    textDecoration: 'none'
  },
  tourName: {
    fontWeight: 500
  },
  chip: {
    margin: theme.spacing(1),
    position: 'absolute',
    top: 0,
    right: 0,
    color: theme.palette.common.white,
    backgroundColor: theme.color.yellow[50],
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
      <Card elevation={0} className={classes.card}>
        <CardMedia className={classes.media} image={`${img}`} title={name} />
        <Chip label="Most popular" className={classes.chip} />
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
          <Link
            href={{
              pathname: '/tour',
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

          <Link href={'#booking-form'}>
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
