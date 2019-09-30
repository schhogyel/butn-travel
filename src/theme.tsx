import { createMuiTheme } from '@material-ui/core/styles';
import { grey, red } from '@material-ui/core/colors';

declare module '@material-ui/core/styles/createMuiTheme' {
  interface Theme {
    color: {
      neutral: {
        '50': string;
        '100': string;
        '200': string;
        '300'?: string;
        '400'?: string;
        '500'?: string;
        '600'?: string;
        '700'?: string;
        '800'?: string;
        '900'?: string;
      };
    };
  }
  // allow configuration using `createMuiTheme`
  interface ThemeOptions {
    color?: {
      neutral?: {
        '50'?: string;
        '100'?: string;
        '200'?: string;
        '300'?: string;
        '400'?: string;
        '500'?: string;
        '600'?: string;
        '700'?: string;
        '800'?: string;
        '900'?: string;
      };
    };
  }
}

const rawTheme = createMuiTheme({
  color: {
    neutral: {
      '50': '#F5F7FA',
      '100': '#E4E7EB',
      '200': '#CBD2D9',
      '300': '#9AA5B1',
      '400': '#7B8794',
      '500': '#616E7C',
      '600': '#52606D',
      '700': '#3E4C59',
      '800': '#323F4B',
      '900': '#1F2933'
    }
  },
  palette: {
    primary: {
      light: '#2D3A8C',
      main: '#19216C',
      dark: '#19216C'
    },
    secondary: {
      light: '#F9703E',
      main: '#F35627',
      dark: '#DE3A11'
    },
    error: {
      main: red[500],
      dark: red[700]
    }
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
    fontSize: 14,
    fontWeightLight: 300, // Work Sans
    fontWeightRegular: 400, // Work Sans
    fontWeightMedium: 500 // Roboto Condensed
  }
});

const fontHeader = {
  color: rawTheme.palette.text.primary,
  fontWeight: rawTheme.typography.fontWeightMedium,
  fontFamily: "'Oswald', sans-serif"
};

const theme = {
  ...rawTheme,
  palette: {
    ...rawTheme.palette,
    background: {
      ...rawTheme.palette.background,
      default: rawTheme.palette.common.white,
      placeholder: grey[200]
    }
  },
  typography: {
    ...rawTheme.typography,
    fontHeader,
    h1: {
      ...rawTheme.typography.h1,
      ...fontHeader,
      letterSpacing: 0,
      fontSize: 60
    },
    h2: {
      ...rawTheme.typography.h2,
      ...fontHeader,
      fontSize: 48,
      [rawTheme.breakpoints.down('sm')]: {
        fontSize: 24
      }
    },
    h3: {
      ...rawTheme.typography.h3,
      ...fontHeader,
      fontSize: 42
    },
    h4: {
      ...rawTheme.typography.h4,
      ...fontHeader,
      fontSize: 36
    },
    h5: {
      ...rawTheme.typography.h5,
      ...fontHeader,
      fontSize: 26,
      fontWeight: rawTheme.typography.fontWeightLight
    },
    h6: {
      ...rawTheme.typography.h6,
      ...fontHeader,
      fontSize: 18
    },
    subtitle1: {
      ...rawTheme.typography.subtitle1,
      fontSize: 18
    },
    body1: {
      ...rawTheme.typography.body2,
      fontWeight: rawTheme.typography.fontWeightRegular,
      fontSize: 16
    },
    body2: {
      ...rawTheme.typography.body1,
      fontSize: 14
    }
  }
};

export default theme;
