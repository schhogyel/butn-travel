import React, { Fragment } from "react";
import NavBar from "./NavBar";

export default function Page(props: any) {
  return (
    <Fragment>
      <NavBar />
      {props.children}
    </Fragment>
  );
}
