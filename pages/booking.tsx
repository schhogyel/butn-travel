import React, { Fragment } from "react";
import BookingNavBar from "../src/components/BookingNavBar";
import Wizard from "../src/components/Wizard/Wizard";
import Footer from "../src/components/Footer";

export default function Booking() {
  return (
    <Fragment>
      <BookingNavBar />
      <Wizard />
      <Footer />
    </Fragment>
  );
}
