import React, { Fragment } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function Page(props: any) {
  return (
    <Fragment>
      <NavBar />
      {props.children}
      <Footer />
    </Fragment>
  );
}
