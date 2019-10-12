import React from 'react';
import deburr from 'lodash/deburr';
import Downshift from 'downshift';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
// import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuItem, { MenuItemProps } from '@material-ui/core/MenuItem';
// import { InputAdornment, IconButton } from '@material-ui/core';
// import { ArrowDropUp, ArrowDropDown } from '@material-ui/icons';
// import Chip from '@material-ui/core/Chip';

interface Suggestion {
  label: string;
}

const suggestions: Suggestion[] = [
  { label: 'Afghanistan' },
  { label: 'Aland Islands' },
  { label: 'Albania' },
  { label: 'Algeria' },
  { label: 'American Samoa' },
  { label: 'Andorra' },
  { label: 'Angola' },
  { label: 'Anguilla' },
  { label: 'Antarctica' },
  { label: 'Antigua and Barbuda' },
  { label: 'Argentina' },
  { label: 'Armenia' },
  { label: 'Aruba' },
  { label: 'Australia' },
  { label: 'Austria' },
  { label: 'Azerbaijan' },
  { label: 'Bahamas' },
  { label: 'Bahrain' },
  { label: 'Bangladesh' },
  { label: 'Barbados' },
  { label: 'Belarus' },
  { label: 'Belgium' },
  { label: 'Belize' },
  { label: 'Benin' },
  { label: 'Bermuda' },
  { label: 'Bhutan' },
  { label: 'Bolivia, Plurinational State of' },
  { label: 'Bonaire, Sint Eustatius and Saba' },
  { label: 'Bosnia and Herzegovina' },
  { label: 'Botswana' },
  { label: 'Bouvet Island' },
  { label: 'Brazil' },
  { label: 'British Indian Ocean Territory' },
  { label: 'Brunei Darussalam' }
];

type RenderInputProps = TextFieldProps & {
  classes: ReturnType<typeof useStyles>;
  ref?: React.Ref<HTMLDivElement>;
};

function renderInput(inputProps: RenderInputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput
        },
        ...InputProps
      }}
      {...other}
    />
  );
}

interface RenderSuggestionProps {
  highlightedIndex: number | null;
  index: number;
  itemProps: MenuItemProps<'div', { button?: never }>;
  selectedItem: Suggestion['label'];
  suggestion: Suggestion;
}

function renderSuggestion(suggestionProps: RenderSuggestionProps) {
  const {
    suggestion,
    index,
    itemProps,
    highlightedIndex,
    selectedItem
  } = suggestionProps;
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}

function getSuggestions(value: string, { showEmpty = false } = {}) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0 && !showEmpty
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 &&
          suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    container: {
      flexGrow: 1,
      position: 'relative'
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing(1),
      left: 0,
      right: 0
    },
    chip: {
      margin: theme.spacing(0.5, 0.25)
    },
    inputRoot: {
      flexWrap: 'wrap'
    },
    inputInput: {
      width: 'auto',
      flexGrow: 1
    },
    divider: {
      height: theme.spacing(2)
    }
  })
);

// let popperNode: HTMLDivElement | null | undefined;

export default function CountryField(props: any) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Downshift {...props.downshiftProps}>
        {({
          getInputProps,
          getItemProps,
          getLabelProps,
          getMenuProps,
          highlightedIndex,
          inputValue,
          isOpen,
          //   openMenu,
          //   closeMenu,
          selectedItem
        }) => {
          const { onBlur, onFocus, ...inputProps } = getInputProps({
            placeholder: 'Type in a Country'
          });

          const InputProps = {
            // endAdornment: (
            //   <InputAdornment position="end">
            //     <IconButton
            //       disabled={props.form.isSubmitting}
            //       onClick={() => (isOpen ? closeMenu() : openMenu())}
            //       tabIndex={-1}
            //     >
            //       {isOpen ? <ArrowDropUp /> : <ArrowDropDown />}
            //     </IconButton>
            //   </InputAdornment>
            // ),
            ...(props.textFieldProps && props.textFieldProps.InputProps),
            ...getInputProps({ onFocus: onFocus, onBlur: props.field.onBlur })
          };

          return (
            <div className={classes.container}>
              {renderInput({
                fullWidth: true,
                classes,
                InputLabelProps: getLabelProps({ shrink: true } as any),
                InputProps: InputProps,
                inputProps
              })}
              <div {...getMenuProps()}>
                {isOpen ? (
                  <Paper className={classes.paper} square>
                    {getSuggestions(inputValue!).map((suggestion, index) =>
                      renderSuggestion({
                        suggestion,
                        index,
                        itemProps: getItemProps({ item: suggestion.label }),
                        highlightedIndex,
                        selectedItem
                      })
                    )}
                  </Paper>
                ) : null}
              </div>
            </div>
          );
        }}
      </Downshift>
    </div>
  );
}
