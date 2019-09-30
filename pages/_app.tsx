import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import { JourneyProvider } from './JourneyContext';

class MyApp extends App {
  componentDidMount() {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <Head>
          <title>Himalayan Bhutan</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <JourneyProvider>
            <Component {...pageProps} />
          </JourneyProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
