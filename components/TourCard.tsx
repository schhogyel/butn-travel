import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  media: {
    height: 0,
    paddingTop: '100%' // 16:9
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
  }
}));

export default function TourCard({ card: { img, name } }: any) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card elevation={0}>
        <CardMedia className={classes.media} image={`${img}`} title={name} />
      </Card>
    </Grid>
  );
}
