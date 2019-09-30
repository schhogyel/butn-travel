import React from 'react';

import { initializeStore, initialState } from '../store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

declare global {
  interface Window {
    __NEXT_REDUX_STORE__: any;
  }
}

function getOrCreateStore(initialState: any) {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(initialState);
  }

  // Store in global variable if client
  if (!window[__NEXT_REDUX_STORE__]) {
    window[__NEXT_REDUX_STORE__] = initializeStore(initialState);
  }
  return window[__NEXT_REDUX_STORE__];
}

export type Store = ReturnType<typeof getOrCreateStore>;

type Props = { reduxStore: Store };

const withReduxStore = (Component: React.ComponentClass<Props>) => {
  return class Redux extends React.Component<Props> {
    private reduxStore: any;

    static async getInitialProps(appContext: any) {
      const reduxStore = getOrCreateStore(initialState);

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = reduxStore;

      let appProps = {};
      if ((Component as any).getInitialProps) {
        appProps = await (Component as any).getInitialProps(appContext);
      }

      return {
        ...appProps,
        initialReduxState: reduxStore.getState()
      };
    }

    constructor(props: any) {
      super(props);
      this.reduxStore = getOrCreateStore(props.initialReduxState);
    }

    render() {
      return <Component {...this.props} reduxStore={this.reduxStore} />;
    }
  };
};

export default withReduxStore;

export const mapDispatchToProps = (dispatch: any) => ({ dispatch });

export type Dispatchable<P> = P & ReturnType<typeof mapDispatchToProps>;
