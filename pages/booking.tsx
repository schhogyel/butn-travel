import React, { Fragment } from 'react';
import BookingNavBar from '../components/BookingNavBar';
import Wizard from '../components/Wizard/Wizard';
import Footer from '../components/Footer';

export default function Booking() {
  return (
    <Fragment>
      <BookingNavBar />
      <Wizard />
      <Footer />
    </Fragment>
  );
}
