import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
// import MuiTextField from "@material-ui/core/TextField";
import { TextField as MuiTextField } from 'formik-material-ui';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 0,
    // padding: theme.spacing(1),
    backgroundColor: theme.palette.common.white,
    'label + &': {
      // marginTop: theme.spacing(3)
    }
  },
  input: {
    minWidth: theme.spacing(6),
    backgroundColor: theme.palette.common.white,
    '&$disabled': {
      backgroundColor: theme.palette.divider
    }
  },
  inputBorder: {
    border: '1px solid #e9ddd0',
    '&:focus': {
      borderColor: theme.palette.secondary.main
    }
  },
  disabled: {},
  inputSizeSmall: {
    fontSize: 14,
    padding: theme.spacing(1),
    width: `calc(100% - ${theme.spacing(2)}px)`
  },
  inputSizeMedium: {
    fontSize: 16,
    padding: theme.spacing(2),
    width: `calc(100% - ${theme.spacing(4)}px)`
  },
  inputSizeLarge: {
    fontSize: 18,
    padding: 22,
    width: `calc(100% - ${22 * 2}px)`
  },
  inputSizeXlarge: {
    fontSize: 20,
    padding: 25,
    width: `calc(100% - ${25 * 2}px)`
  },
  formLabel: {
    fontSize: 18
  },
  select: {
    height: 'auto',
    borderRadius: 0
  },
  selectIcon: {
    top: '50%',
    marginTop: -12
  }
}));

function TextField(props: any) {
  const classes = useStyles();
  const {
    InputProps: {
      // classes: {
      //   input: InputPropsClassesInput,
      //   ...InputPropsClassesOther
      // } = {},
      ...InputPropsOther
    } = {},
    InputLabelProps,
    noBorder = false,
    size = 'medium',
    SelectProps,
    ...other
  } = props;

  return (
    <MuiTextField
      InputProps={{
        disableUnderline: true,
        classes: {
          root: classes.root,
          input: clsx(
            // classes.input,
            classes.inputSizeMedium,
            {
              //   [classes.inputBorder]: !noBorder
            }
            // InputPropsClassesInput
          ),
          disabled: classes.disabled
          // ...InputPropsClassesOther
        },
        ...InputPropsOther
      }}
      InputLabelProps={{
        ...InputLabelProps,
        // shrink: true,
        className: classes.formLabel
      }}
      SelectProps={{
        ...SelectProps,
        classes: {
          select: classes.select,
          icon: classes.selectIcon
        }
      }}
      {...other}
    />
  );
}

export default TextField;
