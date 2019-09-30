import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "@material-ui/core";

storiesOf("Button", module)
  .add("with text", () => (
    <Button color="primary" variant="contained">
      Hello Button{" "}
    </Button>
  ))
  .add("with emoji", () => (
    <Button color="primary">
      <span role="img" aria-label="so cool">
        😀 😎 👍 💯
      </span>
    </Button>
  ));
