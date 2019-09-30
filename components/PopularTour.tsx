import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from './Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TourCard from './TourCard';
import { tourPackages } from '../constants';

const useStyles = makeStyles(theme => ({
  root: {
    // background: "#efeee5"
    background: theme.palette.primary.main
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
    height: '100%',
    display: 'flex',
    flexDirection: 'column'
  },
  cardMedia: {
    paddingTop: '56.25%' // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  },
  title: {
    paddingBottom: theme.spacing(3),
    color: '#fff'
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
            Popular Destinations
          </Typography>
        </Grid>
        <Grid container spacing={4}>
          {tourPackages
            .map(card => <TourCard key={card.id} card={card} />)
            .slice(0, 8)}
        </Grid>
      </Container>
    </div>
  );
}
