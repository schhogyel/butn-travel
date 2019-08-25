import { withStyles, Theme } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";

export const styles = (theme: Theme) => ({
  root: {
    height: 64,
    padding: 0,
    [theme.breakpoints.up("sm")]: {
      height: 70
    }
  }
});

export default withStyles(styles)(Toolbar);
