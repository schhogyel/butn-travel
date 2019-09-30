import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from './Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TourPackage from './TourPackage';
import { tourPackages } from '../constants';
import Button from './Button';
import SwipeableViews from 'react-swipeable-views';

const useStyles = makeStyles(theme => ({
  root: {
    // background: "#f5f5f5"
    background: theme.color.neutral[100]
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
    paddingBottom: theme.spacing(3)
  },
  moreButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: theme.spacing(4)
  }
}));

export default function TourCarousel() {
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

        <SwipeableViews enableMouseEvents>
          {tourPackages
            .map(card => <TourPackage key={card.id} card={card} />)
            .reduce(
              (accum: any[], curr: any): any => {
                if (accum[accum.length - 1].length === 3) accum.push([]);
                accum[accum.length - 1].push(curr);
                return accum;
              },
              [[]]
            )
            .map((item, index) => (
              <Grid container key={index}>
                {item}
              </Grid>
            ))}
        </SwipeableViews>

        <Grid className={classes.moreButton}>
          <Button variant="contained" color="secondary">
            More Tours
          </Button>
        </Grid>
      </Container>
    </div>
  );
}
