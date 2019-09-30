import { withStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

export const styles = (theme: Theme) => ({
  root: {
    height: 64,
    [theme.breakpoints.up("sm")]: {
      height: 70
    }
  }
});

export default withStyles(styles)(AppBar);
