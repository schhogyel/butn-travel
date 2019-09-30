import React from 'react';
import App, { Container } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../theme';
import withReduxStore, { Store } from '../lib/with-redux-store';
import { Provider } from 'react-redux';

interface Props {
  reduxStore: Store;
}
class MyApp extends App<Props & any> {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentNode!.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps, reduxStore } = this.props;

    return (
      <Provider store={reduxStore}>
        <Container>
          <Head>
            <title>Himalayan Bhutan</title>
          </Head>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </Container>
      </Provider>
    );
  }
}

export default withReduxStore(MyApp);
