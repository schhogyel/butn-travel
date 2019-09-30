import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from './Typography';
import { Avatar } from '@material-ui/core';
import { indigo } from '@material-ui/core/colors';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: 'flex',
    overflow: 'hidden',
    backgroundColor: theme.color.neutral[50]
  },
  container: {
    marginTop: theme.spacing(15),
    marginBottom: theme.spacing(30),
    position: 'relative'
  },
  item: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(0, 3)
  },
  image: {
    height: 110
  },
  title: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5)
  },
  sectionTitle: {
    marginBottom: theme.spacing(5)
  },
  curvyLines: {
    pointerEvents: 'none',
    position: 'absolute',
    top: -180
  },
  avatar: {
    margin: 10,
    padding: 20,
    width: 110,
    height: 110,
    backgroundColor: indigo[100],
    fill: 'red'
  }
}));

export default function ValueService(props: any) {
  const classes = useStyles(props);

  const services = [
    {
      id: 1,
      title: 'Guaranteed Visa',
      description:
        "We have satisfied each and every one of our travellers' visa issuance needs.",
      avatar: '/static/passport.svg'
    },
    {
      id: 2,
      title: 'No hidden costs',
      description:
        "You won't need to make any additional payments during your trip.",
      avatar: '/static/bill.svg'
    },
    {
      id: 3,
      title: 'Build your own',
      description:
        '  Create your own special trip by adding short treks, upgrading your hotel stays, witnessing a festival, or even attending awedding.',
      avatar: '/static/customer-support.svg'
    },
    {
      id: 4,
      title: 'Guided Tours',
      description:
        ' We provide experienced local guides that will make your experience richer.',
      avatar: '/static/travel-guide.svg'
    }
  ];

  return (
    <section className={classes.root}>
      <Container className={classes.container}>
        <img
          src="/static/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Grid>
          <Typography
            component="h1"
            variant="h2"
            align="center"
            gutterBottom
            className={classes.sectionTitle}
            marked="center"
          >
            Our Benefits
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          {services.map(service => (
            <Grid item xs={12} md={3} key={service.id}>
              <div className={classes.item}>
                <Avatar src={service.avatar} className={classes.avatar} />
                <Typography variant="h6" className={classes.title}>
                  {service.title}
                </Typography>
                <Typography variant="body1">{service.description}</Typography>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
