import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const CustomButton = withStyles(theme => ({
  root: {
    borderRadius: 0,
    fontWeight: theme.typography.fontWeightMedium,
    padding: theme.spacing(2, 4),
    fontSize: theme.typography.pxToRem(14),
    boxShadow: "none",
    "&:active, &:focus": {
      boxShadow: "none"
    }
  },
  sizeSmall: {
    padding: theme.spacing(1, 3),
    fontSize: theme.typography.pxToRem(13)
  },
  sizeLarge: {
    padding: theme.spacing(2, 5),
    fontSize: theme.typography.pxToRem(16)
  }
}))(Button);

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     margin: {
//       margin: theme.spacing(1)
//     }
//   })
// );

export default (props: any) => {
  return <CustomButton {...props}>{props.children}</CustomButton>;
};
